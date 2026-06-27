"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  Sparkles,
  ContactShadows,
  RoundedBox,
} from "@react-three/drei";
import { Vector3, DoubleSide, BackSide } from "three";
import { useRouter } from "next/navigation";
import {
  StringedInstrument,
  StringCoil,
  AccessorySet,
} from "@/components/studio/instruments";

interface Zone {
  id: string;
  name: string;
  tagline: string;
  href: string;
  color: string;
  position: [number, number, number];
  /** punto de cámara y objetivo al "caminar" hacia la zona */
  camPos: [number, number, number];
  camLook: [number, number, number];
  model: "instrument" | "coil" | "accessory";
}

const ZONES: Zone[] = [
  {
    id: "instrumentos",
    name: "Instrumentos",
    tagline: "Bandolas · tiples · guitarras",
    href: "/tienda/instrumentos",
    color: "#c07a3e",
    position: [-6, 0, -2],
    camPos: [-6, 2, 4],
    camLook: [-6, 1.6, -2],
    model: "instrument",
  },
  {
    id: "cuerdas",
    name: "Cuerdas",
    tagline: "El alma del sonido",
    href: "/tienda/cuerdas",
    color: "#56c596",
    position: [0, 0, -7.5],
    camPos: [0, 2, -2.2],
    camLook: [0, 1.6, -7.5],
    model: "coil",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    tagline: "Cada detalle cuenta",
    href: "/tienda/accesorios",
    color: "#b7ac99",
    position: [6, 0, -2],
    camPos: [6, 2, 4],
    camLook: [6, 1.6, -2],
    model: "accessory",
  },
];

const OVERVIEW = {
  camPos: [0, 3.4, 12] as [number, number, number],
  camLook: [0, 1.2, -3] as [number, number, number],
};

/* ── Cámara que "camina" entre estaciones ───────────────────── */
function CameraRig({
  target,
}: {
  target: { pos: [number, number, number]; look: [number, number, number] };
}) {
  const controls = useThree((s) => s.controls) as unknown as
    | { target: Vector3; update: () => void }
    | undefined;
  const settled = useRef(false);
  const goalPos = useMemo(() => new Vector3(), []);
  const goalLook = useMemo(() => new Vector3(), []);
  const prevKey = useRef("");

  useFrame((state) => {
    const key = target.pos.join(",") + target.look.join(",");
    if (key !== prevKey.current) {
      prevKey.current = key;
      settled.current = false;
    }
    if (settled.current) return;

    goalPos.set(...target.pos);
    goalLook.set(...target.look);
    state.camera.position.lerp(goalPos, 0.045);
    if (controls) {
      controls.target.lerp(goalLook, 0.045);
      controls.update();
    }
    if (state.camera.position.distanceTo(goalPos) < 0.08) {
      settled.current = true;
    }
  });
  return null;
}

/* ── Pedestal con luz cenital y señalética flotante ─────────── */
function Station({
  zone,
  active,
  onSelect,
}: {
  zone: Zone;
  active: boolean;
  onSelect: () => void;
}) {
  const router = useRouter();
  return (
    <group position={zone.position}>
      {/* luz de exhibición */}
      <spotLight
        position={[0, 6, 1.5]}
        angle={0.5}
        penumbra={0.8}
        intensity={active ? 90 : 45}
        color={zone.color}
        distance={16}
        castShadow
      />
      {/* base del pedestal */}
      <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.05, 1.25, 0.3, 48]} />
        <meshStandardMaterial color="#1b1815" roughness={0.7} metalness={0.2} />
      </mesh>
      <RoundedBox
        args={[1.7, 0.8, 1.7]}
        radius={0.06}
        position={[0, 0.7, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial color="#232019" roughness={0.6} />
      </RoundedBox>
      {/* anillo emisivo que indica selección */}
      <mesh position={[0, 1.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.85, 0.95, 48]} />
        <meshStandardMaterial
          color={zone.color}
          emissive={zone.color}
          emissiveIntensity={active ? 1.4 : 0.5}
          side={DoubleSide}
        />
      </mesh>

      {/* el modelo */}
      <group position={[0, 1.1, 0]}>
        {zone.model === "instrument" && (
          <StringedInstrument accent={zone.color} />
        )}
        {zone.model === "coil" && <StringCoil accent={zone.color} />}
        {zone.model === "accessory" && <AccessorySet accent={zone.color} />}
      </group>

      <Sparkles
        count={24}
        scale={[2.4, 3, 2.4]}
        position={[0, 2.4, 0]}
        size={2}
        speed={0.3}
        color={zone.color}
      />

      {/* señalética HTML clicable */}
      <Html
        position={[0, 3.7, 0]}
        center
        distanceFactor={9}
        occlude={false}
        style={{ pointerEvents: "auto" }}
      >
        <div
          onClick={onSelect}
          className="studio-tag"
          style={{
            cursor: "pointer",
            textAlign: "center",
            width: 230,
            transform: `scale(${active ? 1.05 : 1})`,
            transition: "transform .3s",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#f2ece1",
              textShadow: "0 2px 18px rgba(0,0,0,.8)",
              lineHeight: 1.1,
            }}
          >
            {zone.name}
          </div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1,
              color: zone.color,
              marginTop: 4,
              textShadow: "0 2px 12px rgba(0,0,0,.9)",
            }}
          >
            {zone.tagline.toUpperCase()}
          </div>
          {active && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(zone.href);
              }}
              style={{
                marginTop: 10,
                padding: "8px 18px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(180deg,#f4c466,#e0a546)",
                color: "#2a1c08",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                boxShadow: "0 8px 24px -8px rgba(224,165,70,.7)",
              }}
            >
              Ver catálogo →
            </button>
          )}
        </div>
      </Html>
    </group>
  );
}

/* ── La sala del estudio ────────────────────────────────────── */
function StudioRoom() {
  return (
    <group>
      {/* piso */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[20, 64]} />
        <meshStandardMaterial color="#15110d" roughness={0.85} metalness={0.15} />
      </mesh>
      {/* aro de luz en el piso */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -3]}>
        <ringGeometry args={[9.4, 9.6, 80]} />
        <meshStandardMaterial
          color="#e0a546"
          emissive="#e0a546"
          emissiveIntensity={0.6}
        />
      </mesh>
      {/* muros (cilindro envolvente) */}
      <mesh position={[0, 7, -3]}>
        <cylinderGeometry args={[18, 18, 16, 64, 1, true]} />
        <meshStandardMaterial color="#0d0b09" side={BackSide} roughness={1} />
      </mesh>
      <ContactShadows
        position={[0, 0.04, 0]}
        opacity={0.55}
        scale={26}
        blur={2.4}
        far={9}
        color="#000000"
      />
    </group>
  );
}

/* ── Componente principal ───────────────────────────────────── */
export default function StudioScene() {
  const [active, setActive] = useState<number>(-1);
  const target = active === -1 ? OVERVIEW : ZONES[active];

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: OVERVIEW.camPos, fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#0b0a09"]} />
        <fog attach="fog" args={["#0b0a09", 12, 30]} />

        <ambientLight intensity={0.35} color="#f0d9b0" />
        <hemisphereLight intensity={0.25} color="#e0a546" groundColor="#0b0a09" />
        <directionalLight
          position={[6, 10, 6]}
          intensity={0.6}
          color="#f4c466"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <StudioRoom />

        {ZONES.map((zone, i) => (
          <Station
            key={zone.id}
            zone={zone}
            active={active === i}
            onSelect={() => setActive(i)}
          />
        ))}

        <Sparkles
          count={60}
          scale={[26, 10, 26]}
          position={[0, 5, -3]}
          size={1.4}
          speed={0.2}
          color="#e0a546"
          opacity={0.5}
        />

        <CameraRig target={{ pos: target.camPos, look: target.camLook }} />
        <OrbitControls
          makeDefault
          enablePan={false}
          minDistance={3}
          maxDistance={16}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.05}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      {/* HUD del tour */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3 p-5">
        <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-line bg-bg/80 p-2 backdrop-blur-md">
          <button
            onClick={() => setActive(-1)}
            className={`rounded-xl px-4 py-2.5 text-sm transition ${
              active === -1
                ? "bg-amber/20 text-amber-bright"
                : "text-muted hover:bg-panel hover:text-foreground"
            }`}
          >
            ⤢ Vista general
          </button>
          {ZONES.map((z, i) => (
            <button
              key={z.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition ${
                active === i
                  ? "bg-amber/20 text-amber-bright"
                  : "text-muted hover:bg-panel hover:text-foreground"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: z.color }}
              />
              {z.name}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-muted">
          Arrastra para mirar alrededor · usa los botones para caminar entre las
          secciones · haz clic en un letrero para entrar al catálogo
        </p>
      </div>
    </div>
  );
}
