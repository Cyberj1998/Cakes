import { useGLTF } from '@react-three/drei'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function CakeModel(props) {

  const refModel = useRef(null)

  useEffect(()=>{

    if(!refModel)return

    gsap.to(refModel.current.position, {
    x: -2, 
    y: -2,  
    scrollTrigger: {
        trigger: '.containerAnimationTrigger',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        //markers: true,
    },
    });

    gsap.to(refModel.current.rotation, {
    x: 0, 
    y: 0,  
    scrollTrigger: {
        trigger: '.containerAnimationTrigger',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        //markers: true,
    },
    });

  },[])

  const { nodes, materials } = useGLTF('models/slice_of_strawberry_cake.glb')
  return (
    <group ref={refModel} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('models/slice_of_strawberry_cake.glb')