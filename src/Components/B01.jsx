import  { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function B01(props) {

  const group = useRef();
  const { nodes, materials } = useGLTF('/BA01.glb');
  return (
    <group ref={group} {...props} dispose={null} rotation={[0 , -1.6 , 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Terrace_Floor001.geometry}
        material={materials["Fel�let_ker�mia__m�zas.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Terrace_Railing001_1.geometry}
          material={nodes.Terrace_Railing001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Terrace_Railing001_2.geometry}
          material={nodes.Terrace_Railing001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Terrace_Railing001_3.geometry}
          material={nodes.Terrace_Railing001_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Terrace_Railing001_4.geometry}
          material={materials["Material__2142148536.001"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Frame2001_1.geometry}
          material={nodes.Windows_Frame2001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Frame2001_2.geometry}
          material={nodes.Windows_Frame2001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Frame2001_3.geometry}
          material={nodes.Windows_Frame2001_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Frame2001_4.geometry}
          material={nodes.Windows_Frame2001_4.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowWood001.geometry}
        material={materials["A_223__Westag_.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors_Color1001.geometry}
        material={materials["�veg___7C_bord�_.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors_Color2001.geometry}
        material={materials["�veg___7B_k�k.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors_Color3001.geometry}
        material={materials["�veg___7F_narancs.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors_Color4001.geometry}
        material={materials["�veg___7D_vil�gos_k�k.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_Fence001_1.geometry}
          material={nodes.Roof_Fence001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_Fence001_2.geometry}
          material={nodes.Roof_Fence001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof_Fence001_3.geometry}
          material={nodes.Roof_Fence001_3.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Trim001.geometry}
        material={materials["F�m_cink.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Top001.geometry}
        material={materials["Chrome.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofGardenBorder001.geometry}
        material={materials["Fel�let_feh�r.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CurtainWall001.geometry}
        material={materials["Material__2142148535.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TerraceHead001.geometry}
        material={materials["Kling_RAL_9001_kr�mfeh�r.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Terrace_Walls001.geometry}
        material={materials["lambert1.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chrome001.geometry}
        material={materials["Kling_RAL_7004_szign�lsz�rke.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AirVent1001_1.geometry}
          material={nodes.AirVent1001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AirVent1001_2.geometry}
          material={nodes.AirVent1001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AirVent1001_3.geometry}
          material={nodes.AirVent1001_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AirVent1001_4.geometry}
          material={nodes.AirVent1001_4.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MiddleSkirting1001.geometry}
        material={materials["Missing_F�m_cink.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_White001.geometry}
        material={materials["Material__2142148519.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yellow_Glass001.geometry}
        material={nodes.Yellow_Glass001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_CurtainWall001.geometry}
        material={materials["�veg_antracit.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_Doors001.geometry}
        material={materials["�veg_tej�veg.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_White1001.geometry}
        material={materials["�veg___�tl�tsz�.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape001.geometry}
        material={materials["Kling_RAL_7034_s�rg�ssz�rke.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape3001.geometry}
        material={materials["muanyag___lamin�lt.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscaoe001.geometry}
        material={materials["Egy�b_�r�kz�ld.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lanscape001.geometry}
        material={materials["Material__2142148471.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass001.geometry}
        material={materials["Kling_RAL_7044_selyemsz�rke.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube864001.geometry}
        material={materials["Material__2142148539.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass7001.geometry}
        material={materials["Egy�b_fu.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object003001.geometry}
        material={nodes.Object003001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LandscapeGreen001.geometry}
        material={materials["Color_RAL_6018.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LandscapeWhite001.geometry}
        material={materials["A_828__Westag___1_.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LandscapeBlue001.geometry}
        material={materials["Color_RGB_001_089_254.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LandscapeCyan001.geometry}
        material={materials["A_883__Westag___1_.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence001.geometry}
        material={materials["Material__2142148551.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chrome002.geometry}
        material={materials["fest�k___vil�gossz�rke.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassBox_Grass001.geometry}
        material={materials["Material__2142148549.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassBox_Body001.geometry}
        material={materials["Material__2142148550.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ExtensionTrim2001.geometry}
        material={materials["Material__2142148548.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassBox001.geometry}
        material={materials["f�m___rozsdamentes_ac�l.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Entrance001.geometry}
        material={materials["Material__2142148546.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceCircles001.geometry}
        material={materials["Kling_RAL_7016_antracitsz�rke.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFencePurple001.geometry}
        material={materials["Material__2142148541.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceBlue001.geometry}
        material={materials["Material__2142148542.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GardenDoor001.geometry}
        material={materials["fest�k___bord�.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceRed001.geometry}
        material={materials["Material__2142148543.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GardenFrame001.geometry}
        material={materials["Material__2142148544.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceGreen001.geometry}
        material={materials["�veg___7E_z�ld.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceOrange001.geometry}
        material={materials["Material__2142148545.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceTrim001.geometry}
        material={materials["PEN_MATERIAL12.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceYellow001.geometry}
        material={materials["�veg___7A_s�rga.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ExtensionBlack001.geometry}
        material={materials["Material__2142148547.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050001.geometry}
        material={materials["wire_087225087.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Water001.geometry}
        material={materials["Material__2142148553.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface179001.geometry}
        material={nodes.polySurface179001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Top1001.geometry}
        material={nodes.Roof_Top1001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape2001.geometry}
        material={materials["ko___carrarai_feh�r_m�rv�ny.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass001.geometry}
        material={materials["f�m___ker�t�sh�l�.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape1001.geometry}
        material={materials["f�m___ac�l.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CircleFenceColumns001.geometry}
        material={materials["_Fal_burkolat_recepci�_2_fa.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pathway001.geometry}
        material={materials["_D�szburkolat_2.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MiddleSkirting001.geometry}
        material={materials["Material__2142148388.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass4001.geometry}
        material={materials["_Egy�b_fu_kopott.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_Top001.geometry}
        material={materials["�veg___b�kany�l_7A_s�rga.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Bottom001.geometry}
        material={materials["Material__2142148364.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MiddleSirting001.geometry}
        material={materials["Material__2142148448.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cladding_Cladding1001.geometry}
        material={materials["Material__2142148389.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Black2001.geometry}
        material={materials["Material__2142148340.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_MiddleBlack001.geometry}
        material={materials["Material__2142148341.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Floor001.geometry}
        material={materials["Material__2142148470.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Black1001.geometry}
        material={materials["Material__2142148342.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves001.geometry}
        material={nodes.leaves001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves001001.geometry}
        material={nodes.leaves001001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves002001.geometry}
        material={nodes.leaves002001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves003001.geometry}
        material={nodes.leaves003001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves005001.geometry}
        material={nodes.leaves005001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves006001.geometry}
        material={nodes.leaves006001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves007001.geometry}
        material={nodes.leaves007001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves009001.geometry}
        material={nodes.leaves009001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves010001.geometry}
        material={nodes.leaves010001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves012001.geometry}
        material={nodes.leaves012001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves013001.geometry}
        material={nodes.leaves013001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves014001.geometry}
        material={nodes.leaves014001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves015001.geometry}
        material={nodes.leaves015001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves016001.geometry}
        material={nodes.leaves016001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves017001.geometry}
        material={nodes.leaves017001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves018001.geometry}
        material={nodes.leaves018001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves019001.geometry}
        material={nodes.leaves019001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves020001.geometry}
        material={nodes.leaves020001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves021001.geometry}
        material={nodes.leaves021001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves022001.geometry}
        material={nodes.leaves022001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves023001.geometry}
        material={nodes.leaves023001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves024001.geometry}
        material={nodes.leaves024001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves025001.geometry}
        material={nodes.leaves025001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves026001.geometry}
        material={nodes.leaves026001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves033001.geometry}
        material={nodes.leaves033001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves034001.geometry}
        material={nodes.leaves034001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves035001.geometry}
        material={nodes.leaves035001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves036001.geometry}
        material={nodes.leaves036001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves037001.geometry}
        material={nodes.leaves037001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves038001.geometry}
        material={nodes.leaves038001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves039001.geometry}
        material={nodes.leaves039001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves040001.geometry}
        material={nodes.leaves040001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves042001.geometry}
        material={nodes.leaves042001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves043001.geometry}
        material={nodes.leaves043001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves044001.geometry}
        material={nodes.leaves044001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves045001.geometry}
        material={nodes.leaves045001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves046001.geometry}
        material={nodes.leaves046001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves047001.geometry}
        material={nodes.leaves047001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves048001.geometry}
        material={nodes.leaves048001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves049001.geometry}
        material={nodes.leaves049001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves050001.geometry}
        material={nodes.leaves050001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves051001.geometry}
        material={nodes.leaves051001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves052001.geometry}
        material={nodes.leaves052001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves053001.geometry}
        material={nodes.leaves053001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves054001.geometry}
        material={nodes.leaves054001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves055001.geometry}
        material={nodes.leaves055001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves056001.geometry}
        material={nodes.leaves056001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves057001.geometry}
        material={nodes.leaves057001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves058001.geometry}
        material={nodes.leaves058001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves059001.geometry}
        material={nodes.leaves059001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves060001.geometry}
        material={nodes.leaves060001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves061001.geometry}
        material={nodes.leaves061001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves062001.geometry}
        material={nodes.leaves062001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves063001.geometry}
        material={nodes.leaves063001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves064001.geometry}
        material={nodes.leaves064001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves065001.geometry}
        material={nodes.leaves065001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves069001.geometry}
        material={nodes.leaves069001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves070001.geometry}
        material={nodes.leaves070001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves071001.geometry}
        material={nodes.leaves071001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves072001.geometry}
        material={nodes.leaves072001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Floor1001.geometry}
        material={materials["Material__2142148386.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Wood1001.geometry}
        material={materials["Material__2142148484.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cladding_Cladding2010.geometry}
        material={materials["Material__2142148390.010"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object004002.geometry}
        material={materials["Material__2142148554.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass6001.geometry}
        material={materials["Material__2142148453.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Walls001.geometry}
        material={materials["Material__2142148365.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Terrace_Ceiling001.geometry}
        material={materials["Material__2142148387.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape4001.geometry}
        material={materials["Material__2142148454.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass2001.geometry}
        material={materials["Material__2142148450.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface156001.geometry}
        material={materials["Material__2142148452.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MiddleWallWhite001.geometry}
        material={materials["Material__2142148344.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass1001.geometry}
        material={materials["Material__2142148467.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofGarden001.geometry}
        material={materials["Material__2142148449.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001.geometry}
        material={nodes.tree001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree001001.geometry}
        material={nodes.tree001001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree002001.geometry}
        material={nodes.tree002001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree003001.geometry}
        material={nodes.tree003001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree005001.geometry}
        material={nodes.tree005001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree006001.geometry}
        material={nodes.tree006001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree007001.geometry}
        material={nodes.tree007001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree009001.geometry}
        material={nodes.tree009001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree010001.geometry}
        material={nodes.tree010001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree012001.geometry}
        material={nodes.tree012001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree013001.geometry}
        material={nodes.tree013001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree014001.geometry}
        material={nodes.tree014001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree015001.geometry}
        material={nodes.tree015001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree016001.geometry}
        material={nodes.tree016001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree017001.geometry}
        material={nodes.tree017001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree018001.geometry}
        material={nodes.tree018001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree019001.geometry}
        material={nodes.tree019001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree020001.geometry}
        material={nodes.tree020001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree021001.geometry}
        material={nodes.tree021001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree022001.geometry}
        material={nodes.tree022001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree023001.geometry}
        material={nodes.tree023001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree024001.geometry}
        material={nodes.tree024001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree025001.geometry}
        material={nodes.tree025001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree026001.geometry}
        material={nodes.tree026001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree033001.geometry}
        material={nodes.tree033001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree034001.geometry}
        material={nodes.tree034001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree035001.geometry}
        material={nodes.tree035001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree036001.geometry}
        material={nodes.tree036001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree037001.geometry}
        material={nodes.tree037001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree038001.geometry}
        material={nodes.tree038001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree039001.geometry}
        material={nodes.tree039001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree040001.geometry}
        material={nodes.tree040001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree042001.geometry}
        material={nodes.tree042001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree043001.geometry}
        material={nodes.tree043001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree044001.geometry}
        material={nodes.tree044001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree045001.geometry}
        material={nodes.tree045001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree046001.geometry}
        material={nodes.tree046001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree047001.geometry}
        material={nodes.tree047001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree048001.geometry}
        material={nodes.tree048001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree049001.geometry}
        material={nodes.tree049001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree050001.geometry}
        material={nodes.tree050001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree051001.geometry}
        material={nodes.tree051001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree052001.geometry}
        material={nodes.tree052001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree053001.geometry}
        material={nodes.tree053001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree054001.geometry}
        material={nodes.tree054001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree055001.geometry}
        material={nodes.tree055001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree056001.geometry}
        material={nodes.tree056001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree057001.geometry}
        material={nodes.tree057001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree058001.geometry}
        material={nodes.tree058001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree059001.geometry}
        material={nodes.tree059001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree060001.geometry}
        material={nodes.tree060001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree061001.geometry}
        material={nodes.tree061001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree062001.geometry}
        material={nodes.tree062001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree063001.geometry}
        material={nodes.tree063001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree064001.geometry}
        material={nodes.tree064001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree065001.geometry}
        material={nodes.tree065001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree069001.geometry}
        material={nodes.tree069001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree070001.geometry}
        material={nodes.tree070001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree071001.geometry}
        material={nodes.tree071001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree072001.geometry}
        material={nodes.tree072001.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/BA01.glb');