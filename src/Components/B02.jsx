import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function B02(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/B02.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={nodes.Object_59.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={nodes.Object_58.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_69.geometry}
              material={materials.Material__2142148578}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials.Material__2142148573}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.Material__2142148585}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_108.geometry}
              material={materials.Fellet_beton}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_104.geometry}
              material={materials.Kling_RAL_7034_srgsszrke}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_106.geometry}
              material={materials.Material__2142148553}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_90.geometry}
              material={materials.Egyb_fu_gyeprcs}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_92.geometry}
              material={materials.Material__2142148562}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_96.geometry}
              material={materials.Material__2142148594}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_116.geometry}
              material={nodes.Object_116.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_94.geometry}
              material={materials.Material__2142148449}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_114.geometry}
              material={materials.Material__2142148584}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.Material__2142148570}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.missing_Kling_RAL_7004_szignlszrke}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.Material__2142148572}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_100.geometry}
              material={materials.Material__2142148583}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_98.geometry}
              material={materials.Material__2142148452}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_102.geometry}
              material={materials.beton___04}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_87.geometry}
              material={nodes.Object_87.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials.missing_Fellet_fehr}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Material__2142148591}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials.fm___alumnium}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.Material__2142148535}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_71.geometry}
              material={materials.Material__2142148579}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={nodes.Object_31.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_110.geometry}
              material={nodes.Object_110.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_112.geometry}
              material={materials.missing_Fa_lambria__vilgos}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={nodes.Object_73.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials.Material__2142148387}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials.Fellet_kermia__mzas}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_83.geometry}
              material={materials.Material__2142148342}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_81.geometry}
              material={materials.Kling_RAL_7040_ablakszrke}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.missing_festk___titnfehr}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Material__2142148588}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={nodes.Object_118.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_120.geometry}
              material={materials.Material__2142148538}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_122.geometry}
              material={materials.Material__2142148590}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_124.geometry}
              material={materials.Material__2142148593}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Material__2142148592}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.PEN_MATERIAL19}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials.Dszburkolat_kikockako}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.trburkolat___macskakves_tgla}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.Material__2142148468}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.koburkolat___13}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.Material__2142148587}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={nodes.Object_45.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.fm___acl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.fm___vas}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={nodes.Object_49.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={nodes.Object_51.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={nodes.Object_50.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Material__2142148586}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={nodes.Object_18.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.Material__2142148340}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.Material__2142148389}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.veg___7B_kk_TMR}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.festk___kirlykk}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Material__2142148566}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={nodes.Object_54.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={nodes.Object_53.material}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.Material__2142148519}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.A_223__Westag}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/B02.glb');