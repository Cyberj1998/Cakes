import CakeSlice from '/images/cakeSlice.png'
import CakeBite from '/images/cakeBite.png'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CakePlaneMaterial = ({ cakeBite }) => {

  const cakeBiteRef = useRef()

  const texture = useLoader(TextureLoader, '/images/cakeSlice.png');
  const texture2 = useLoader(TextureLoader, '/images/cakeBite.png');

  const arrayTextures = [texture, texture2]

  useEffect(()=>{

    const tl = gsap.timeline();
  
    tl.to(cakeBiteRef.current.position, { 
      y: .5,
      duration: .2,
      ease: "power2.out",
    }).to(cakeBiteRef.current.position, { 
      y: 0,
      duration: 2.5,
      ease: "elastic.out(1,0.2)",
    });
  },[cakeBite])

  return (
    <group>
      <mesh rotation={[0, 0, 0]} ref={cakeBiteRef}>
        <planeGeometry args={[5.3, 4]} />
        <meshBasicMaterial map={arrayTextures[cakeBite]} transparent />
      </mesh>
    </group>
  )
}

export default CakePlaneMaterial
