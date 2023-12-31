import { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, useProgress, Html, Sphere } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import GoogleEarthMin from "./Components/GoogleEarthMin";
import { Model } from "./Components/B03";
import image360 from './images/3602.jpeg';

extend({ OrbitControls });

function Box(props) {

  const [hovered, setHover] = useState(false);
  const mesh = useRef();
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHover(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHover(false)
      }}
    >
      <boxGeometry args={[90, 30, 70]} />
      <meshStandardMaterial color={hovered ? props.free ? "cyan" : "orange" : ""} transparent opacity={hovered ? .6 : 0} />
    </mesh>
  );
}



function Dome() {
  const colorMap = useLoader(TextureLoader, image360)
  return (
    <group>
      <Sphere rotation={[0, 3, 0]} args={[5000, 1000, 1000]}>
        <meshPhysicalMaterial
          attach="material"
          map={colorMap}
          side={THREE.BackSide}
        />

      </Sphere>
    </group>
  );
}

const Loader = () => {
  const { total } = useProgress()
  let cal = total / 154 * 100;
  return (
    <Html center>downloading {Math.round(cal)} %</Html>
  )
};

function App() {

  return (
    <>
      <Canvas
        shadowMap camera={{ fov: 45, zoom: 1, near: 200, far: 10000, position: [0, 500, 1500] }} style={{ height: `100vh`, width: '100vw' }}>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
          zoomSpeed={0.3}
          minDistance={600}
          maxDistance={800}
          target={new THREE.Vector3(-300, -50, 300)}
        ></OrbitControls>
        <Suspense fallback={<Loader />}>
          <Dome />
          <Model scale={12} position={[-300, -230, 300]} />
          <GoogleEarthMin scale={[1.3, 1.3, 1.3]} position={[200, -180, 400]} />
          <Environment preset="warehouse" intensity={2} background="./098_hdrmaps_com_free1.exr" />
        </Suspense>

        <directionalLight color={"white"} position={[0, -500, 50]} intensity={1} />
        <ambientLight color={"white"} intensity={0.5} />

        <group rotation={[0, -1.6, 0]} position={[-230, 0, 212]} >
          <Box position={[-295, -175, 110]} free={true} floor={1} color={"orange"} />
          <Box position={[-295, -146, 110]} free={true} floor={2} color={"orange"} />
          <Box position={[-295, -117, 110]} free={false} floor={3} color={"orange"} />
          <Box position={[-295, -59, 110]} free={true} floor={4} color={"orange"} />
          <Box position={[-295, -88, 110]} free={false} floor={5} color={"orange"} />
          <Box position={[-295, -30, 110]} free={true} floor={6} color={"orange"} />
          <Box position={[-295, 1, 110]} free={false} floor={7} color={"orange"} />
          <Box position={[-295, 32, 110]} free={true} floor={8} color={"orange"} />
          <Box position={[-295, 63, 110]} free={true} floor={9} color={"orange"} />
          <Box position={[-295, 94, 110]} free={false} floor={10} color={"orange"} />
          <Box position={[-295, 125, 110]} free={true} floor={11} color={"orange"} />
          <Box position={[-295, 156, 110]} free={false} floor={12} color={"orange"} />
          <Box position={[-295, 187, 110]} free={false} floor={13} color={"orange"} />
          <Box position={[-295, 218, 110]} free={true} floor={14} color={"orange"} />
          <Box position={[-178, 62, 110]} free={true} floor={15} color={"yellow"} />
        </group>
      </Canvas>
    </>
  );
}


export default App
