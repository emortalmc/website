/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type MeshStandardMaterial, type Mesh, Euler, Quaternion, Vector3, Color } from "three";

const hexMix = (from: string, to: string, ratio: number) => {
    // const hex = (c: string) => parseInt(c, 16);
    // const hex2 = (x: number) => {
    //     const hex = x.toString(16);
    //     return hex.length === 1 ? "0" + hex : hex;
    // };
    // const r = Math.ceil(hex(from.substring(0, 2)) * (1 - ratio) + hex(to.substring(0, 2)) * ratio);
    // const g = Math.ceil(hex(from.substring(2, 4)) * (1 - ratio) + hex(to.substring(2, 4)) * ratio);
    // const b = Math.ceil(hex(from.substring(4, 6)) * (1 - ratio) + hex(to.substring(4, 6)) * ratio);
    // return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    const fromNum = from.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * (1 - ratio));
    const toNum = to.match(/.{1,2}/g)!.map((oct) => parseInt(oct, 16) * ratio);
    const ci = [0, 1, 2].map((i) => Math.min(Math.round(fromNum[i]! + toNum[i]!), 255));
    return ci
        .reduce((a, v) => (a << 8) + v, 0)
        .toString(16)
        .padStart(6, "0");
    // return `#${hex2(r)}${hex2(g)}${hex2(b)}`;
};

export const Cube = () => {
    // we use null-assertion to tell typescript that we know that the ref will be assigned
    // react-three/fiber will assign the ref to the mesh. This rule is disabled in this file
    const meshRef = useRef<Mesh>(null!);
    const materialRef = useRef<MeshStandardMaterial>(null!);

    const rotation = useRef(new Quaternion().setFromAxisAngle(new Vector3(0, 1, 1).normalize(), 0));

    useFrame((_, delta) => {
        rotation.current.setFromAxisAngle(new Vector3(0, 1, 1).normalize(), delta);
        meshRef.current.quaternion.multiply(rotation.current);
        materialRef.current.color.set(
            new Color("#" + hexMix("ff7802", "FF55FF", (Math.sin(Date.now() / 1000) + 1) / 2))
        );
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 5, 0]} intensity={0.7} />
            <mesh ref={meshRef} scale={3} rotation={new Euler(0, 1, 1)}>
                <boxGeometry />
                <meshStandardMaterial color="#FFAA00" ref={materialRef} />
            </mesh>
        </>
    );
};

export const EmortalCube = () => {
    return (
        <div className="h-full w-full">
            <Canvas>
                <Cube />
            </Canvas>
        </div>
    );
};
