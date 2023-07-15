/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type MeshStandardMaterial, type Mesh } from "three";

const hexMix = (from: string, to: string, ratio: number) => {
    const hex = (c: string) => parseInt(c, 16);
    const r = Math.round(hex(from.substring(0, 2)) * (1 - ratio) + hex(to.substring(0, 2)) * ratio);
    const g = Math.round(hex(from.substring(2, 4)) * (1 - ratio) + hex(to.substring(2, 4)) * ratio);
    const b = Math.round(hex(from.substring(4, 6)) * (1 - ratio) + hex(to.substring(4, 6)) * ratio);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

export const Cube = () => {
    // we use null-assertion to tell typescript that we know that the ref will be assigned
    // react-three/fiber will assign the ref to the mesh. This rule is disabled in this file
    const meshRef = useRef<Mesh>(null!);
    const materialRef = useRef<MeshStandardMaterial>(null!);

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
        materialRef.current.color.set(hexMix("FFAA00", "FF55FF", (Math.sin(Date.now() / 1000) + 1) / 2));
    });

    return (
        <mesh ref={meshRef} scale={3}>
            <ambientLight intensity={1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <boxGeometry />
            <meshStandardMaterial color="#FFAA00" ref={materialRef} />
        </mesh>
    );
};

export const EmortalCube = () => {
    return (
        <div className="cube">
            <Canvas>
                <Cube />
            </Canvas>
        </div>
    );
};
