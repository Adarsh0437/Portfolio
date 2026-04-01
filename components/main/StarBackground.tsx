"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const createSpherePoints = (count: number, radius: number) => {
    const points = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
        const distance = radius * Math.cbrt(Math.random());
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = distance * Math.sin(phi) * Math.cos(theta);
        const y = distance * Math.sin(phi) * Math.sin(theta);
        const z = distance * Math.cos(phi);

        const offset = i * 3;
        points[offset] = x;
        points[offset + 1] = y;
        points[offset + 2] = z;
    }

    return points;
};

const StarBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() => createSpherePoints(5000, 1.2));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref} frustumCulled {...props}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={sphere.length / 3}
                        array={sphere}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="pointer-events-none w-full h-auto fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
