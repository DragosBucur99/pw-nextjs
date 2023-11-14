import * as THREE from "three";
import { useDrag } from "react-use-gesture";
import React, { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

export default function Cube(props: any) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const bind = useDrag(({ offset: [x, y], movement: [mx, my], down }) => {
    if (down) {
      // Accumulate rotation values
      setRotation({
        x: rotation.x + my / 10000,
        y: rotation.y + mx / 10000,
      });
    }
  });

  useFrame(() => {
    // Update rotation at the end of each frame
    ref.current.rotation.x = rotation.x;
    ref.current.rotation.y = rotation.y;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setRotation({ x: 0, y: 0 })}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...bind()}
    >
      <boxGeometry args={[6, 6, 6]} />
      <meshStandardMaterial />
    </mesh>
  );
}
