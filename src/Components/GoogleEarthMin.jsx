import  { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function GoogleEarthMin(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/GoogleEarth.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00109004"].geometry}
        material={materials["BuildingMat-00109.004"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00123003"].geometry}
        material={materials["BuildingMat-00123.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00125003"].geometry}
        material={materials["BuildingMat-00125.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00127003"].geometry}
        material={materials["BuildingMat-00127.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00128003"].geometry}
        material={materials["BuildingMat-00128.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00129003"].geometry}
        material={materials["BuildingMat-00129.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00110004"].geometry}
        material={materials["BuildingMat-00110.004"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00117003"].geometry}
        material={materials["BuildingMat-00117.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00133003"].geometry}
        material={materials["BuildingMat-00133.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00111003"].geometry}
        material={materials["BuildingMat-00111.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00139003"].geometry}
        material={materials["BuildingMat-00139.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00124003"].geometry}
        material={materials["BuildingMat-00124.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00119003"].geometry}
        material={materials["BuildingMat-00119.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00126003"].geometry}
        material={materials["BuildingMat-00126.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00140003"].geometry}
        material={materials["BuildingMat-00140.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00135003"].geometry}
        material={materials["BuildingMat-00135.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00141003"].geometry}
        material={materials["BuildingMat-00141.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00151003"].geometry}
        material={materials["BuildingMat-00151.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00153003"].geometry}
        material={materials["BuildingMat-00153.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00155003"].geometry}
        material={materials["BuildingMat-00155.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00137003"].geometry}
        material={materials["BuildingMat-00137.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00157003"].geometry}
        material={materials["BuildingMat-00157.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00158003"].geometry}
        material={materials["BuildingMat-00158.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00152003"].geometry}
        material={materials["BuildingMat-00152.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00131003"].geometry}
        material={materials["BuildingMat-00131.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00154003"].geometry}
        material={materials["BuildingMat-00154.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00156003"].geometry}
        material={materials["BuildingMat-00156.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00147003"].geometry}
        material={materials["BuildingMat-00147.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00161003"].geometry}
        material={materials["BuildingMat-00161.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00168003"].geometry}
        material={materials["BuildingMat-00168.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00170003"].geometry}
        material={materials["BuildingMat-00170.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00172003"].geometry}
        material={materials["BuildingMat-00172.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00143003"].geometry}
        material={materials["BuildingMat-00143.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00163003"].geometry}
        material={materials["BuildingMat-00163.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00159003"].geometry}
        material={materials["BuildingMat-00159.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00173003"].geometry}
        material={materials["BuildingMat-00173.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00167003"].geometry}
        material={materials["BuildingMat-00167.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00174003"].geometry}
        material={materials["BuildingMat-00174.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00169003"].geometry}
        material={materials["BuildingMat-00169.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00181003"].geometry}
        material={materials["BuildingMat-00181.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00171003"].geometry}
        material={materials["BuildingMat-00171.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00165003"].geometry}
        material={materials["BuildingMat-00165.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00191003"].geometry}
        material={materials["BuildingMat-00191.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00177003"].geometry}
        material={materials["BuildingMat-00177.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00197003"].geometry}
        material={materials["BuildingMat-00197.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00185003"].geometry}
        material={materials["BuildingMat-00185.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00186003"].geometry}
        material={materials["BuildingMat-00186.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00198003"].geometry}
        material={materials["BuildingMat-00198.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00188003"].geometry}
        material={materials["BuildingMat-00188.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00179003"].geometry}
        material={materials["BuildingMat-00179.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00199003"].geometry}
        material={materials["BuildingMat-00199.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00195003"].geometry}
        material={materials["BuildingMat-00195.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00200002"].geometry}
        material={materials["BuildingMat-00200.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00201002"].geometry}
        material={materials["BuildingMat-00201.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00209002"].geometry}
        material={materials["BuildingMat-00209.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00212002"].geometry}
        material={materials["BuildingMat-00212.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00189003"].geometry}
        material={materials["BuildingMat-00189.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00214002"].geometry}
        material={materials["BuildingMat-00214.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00175003"].geometry}
        material={materials["BuildingMat-00175.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00183003"].geometry}
        material={materials["BuildingMat-00183.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00216002"].geometry}
        material={materials["BuildingMat-00216.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00203002"].geometry}
        material={materials["BuildingMat-00203.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00184003"].geometry}
        material={materials["BuildingMat-00184.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00187003"].geometry}
        material={materials["BuildingMat-00187.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00211002"].geometry}
        material={materials["BuildingMat-00211.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00213002"].geometry}
        material={materials["BuildingMat-00213.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00215002"].geometry}
        material={materials["BuildingMat-00215.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00219002"].geometry}
        material={materials["BuildingMat-00219.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00193003"].geometry}
        material={materials["BuildingMat-00193.003"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00205002"].geometry}
        material={materials["BuildingMat-00205.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00217002"].geometry}
        material={materials["BuildingMat-00217.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00231002"].geometry}
        material={materials["BuildingMat-00231.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00235002"].geometry}
        material={materials["BuildingMat-00235.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00225002"].geometry}
        material={materials["BuildingMat-00225.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00243002"].geometry}
        material={materials["BuildingMat-00243.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00247002"].geometry}
        material={materials["BuildingMat-00247.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00207002"].geometry}
        material={materials["BuildingMat-00207.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00223002"].geometry}
        material={materials["BuildingMat-00223.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00239002"].geometry}
        material={materials["BuildingMat-00239.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00241002"].geometry}
        material={materials["BuildingMat-00241.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00246002"].geometry}
        material={materials["BuildingMat-00246.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00249002"].geometry}
        material={materials["BuildingMat-00249.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00221002"].geometry}
        material={materials["BuildingMat-00221.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00242002"].geometry}
        material={materials["BuildingMat-00242.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00227002"].geometry}
        material={materials["BuildingMat-00227.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00245002"].geometry}
        material={materials["BuildingMat-00245.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00248002"].geometry}
        material={materials["BuildingMat-00248.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00229002"].geometry}
        material={materials["BuildingMat-00229.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00233002"].geometry}
        material={materials["BuildingMat-00233.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00253002"].geometry}
        material={materials["BuildingMat-00253.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00257002"].geometry}
        material={materials["BuildingMat-00257.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00269002"].geometry}
        material={materials["BuildingMat-00269.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00258002"].geometry}
        material={materials["BuildingMat-00258.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00261002"].geometry}
        material={materials["BuildingMat-00261.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00237002"].geometry}
        material={materials["BuildingMat-00237.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00251002"].geometry}
        material={materials["BuildingMat-00251.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00263002"].geometry}
        material={materials["BuildingMat-00263.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["BuildingMesh-00255002"].geometry}
        material={materials["BuildingMat-00255.002"]}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
    </group>
  );
}

useGLTF.preload('/GoogleEarth.glb');