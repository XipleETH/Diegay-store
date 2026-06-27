"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

/* Modelos low-poly construidos con primitivas — sin assets externos. */

const WOOD = "#8a4f27";
const WOOD_LIGHT = "#c07a3e";
const STRING = "#56c596";
const METAL = "#cdbda4";

/** Bandola / guitarra estilizada sobre un atril. */
export function StringedInstrument({
  accent = WOOD_LIGHT,
}: {
  accent?: string;
}) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.18 + 0.2;
    }
  });
  return (
    <group ref={ref} rotation={[0.1, 0.2, 0.04]} position={[0, 1.45, 0]}>
      {/* cuerpo inferior (más grande) */}
      <mesh position={[0, -0.45, 0]} scale={[1, 1.05, 0.22]} castShadow>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshStandardMaterial color={WOOD} roughness={0.45} metalness={0.1} />
      </mesh>
      {/* cuerpo superior (más pequeño) */}
      <mesh position={[0, 0.42, 0]} scale={[0.78, 0.78, 0.22]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={WOOD} roughness={0.45} metalness={0.1} />
      </mesh>
      {/* boca */}
      <mesh position={[0, -0.1, 0.14]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.16, 0.025, 16, 32]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0, -0.1, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#120d08" />
      </mesh>
      {/* mástil */}
      <mesh position={[0, 1.35, 0.02]} castShadow>
        <boxGeometry args={[0.14, 1.5, 0.1]} />
        <meshStandardMaterial color={WOOD_LIGHT} roughness={0.5} />
      </mesh>
      {/* clavijero */}
      <mesh position={[0, 2.18, 0.02]} castShadow>
        <boxGeometry args={[0.22, 0.34, 0.08]} />
        <meshStandardMaterial color="#3a2414" roughness={0.5} />
      </mesh>
      {/* cuerdas */}
      {[-0.04, -0.013, 0.013, 0.04].map((x, i) => (
        <mesh key={i} position={[x, 0.7, 0.16]}>
          <boxGeometry args={[0.005, 2.4, 0.005]} />
          <meshStandardMaterial
            color={METAL}
            emissive={accent}
            emissiveIntensity={0.15}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Bobina de cuerdas brillante. */
export function StringCoil({ accent = STRING }: { accent?: string }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref} position={[0, 1.5, 0]}>
        <mesh castShadow>
          <torusKnotGeometry args={[0.42, 0.075, 160, 24, 2, 5]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.55}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
        {[0.62, 0.74, 0.86].map((r, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.4]}>
            <torusGeometry args={[r, 0.018, 12, 64]} />
            <meshStandardMaterial
              color={METAL}
              emissive={accent}
              emissiveIntensity={0.2}
              metalness={0.85}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/** Conjunto de accesorios: estuche, afinador y metrónomo. */
export function AccessorySet({ accent = METAL }: { accent?: string }) {
  const tuner = useRef<Mesh>(null);
  useFrame((state) => {
    if (tuner.current)
      tuner.current.position.y =
        1.55 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });
  return (
    <group position={[0, 1.0, 0]}>
      {/* estuche */}
      <RoundedBox args={[1.1, 0.4, 0.7]} radius={0.08} position={[0, 0.2, 0]} castShadow>
        <meshStandardMaterial color="#4a3a2c" roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[1.0, 0.06, 0.6]} radius={0.03} position={[0, 0.42, 0]}>
        <meshStandardMaterial color={accent} metalness={0.5} roughness={0.4} />
      </RoundedBox>
      {/* afinador flotante */}
      <mesh ref={tuner} position={[0.35, 1.55, 0.1]} castShadow>
        <boxGeometry args={[0.28, 0.4, 0.06]} />
        <meshStandardMaterial color="#1b1815" roughness={0.4} />
      </mesh>
      <mesh position={[0.35, 1.6, 0.14]}>
        <planeGeometry args={[0.2, 0.16]} />
        <meshStandardMaterial
          color="#56c596"
          emissive="#56c596"
          emissiveIntensity={0.7}
        />
      </mesh>
      {/* metrónomo (cono) */}
      <mesh position={[-0.35, 0.95, 0]} castShadow>
        <coneGeometry args={[0.28, 0.7, 4]} />
        <meshStandardMaterial color="#6b4226" roughness={0.5} />
      </mesh>
    </group>
  );
}
