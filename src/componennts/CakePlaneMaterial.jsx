import CakeSlice from '/images/cakeSlice.png'
import CakeBite from '/images/cakeBite.png'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const CakePlaneMaterial = ({ cakeBite }) => {

  const cakeBiteRef = useRef()

  const texture = useLoader(TextureLoader, '/images/cakeSlice.png');
  const texture2 = useLoader(TextureLoader, '/images/cakeBite.png');

  const arrayTextures = [texture, texture2]


  const[height, setHeight]=useState(5.3)
  const[width, setWidth]=useState(4)


  useEffect(()=>{

    const windowWidth = window.innerWidth

    if(windowWidth <= 700){
      setHeight(3)
      setWidth(2.5)
    }

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
        <planeGeometry args={[height, width]} />
        <meshBasicMaterial map={arrayTextures[cakeBite]} transparent />
      </mesh>
    </group>
  )
}

export default CakePlaneMaterial
