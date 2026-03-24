import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ContactShadows } from '@react-three/drei';

const PlaneMaterial = ({ selected, setSelectedCurrent, selectedCurrent }) => {

  const texture = useLoader(TextureLoader, '/images/mostPopular-3.png');
  const texture2 = useLoader(TextureLoader, '/images/mostPopular-2.png');
  const texture3 = useLoader(TextureLoader, '/images/mostPopular-1.png');

  const arrayTextures = [texture, texture2, texture3]

  const cakeRef = useRef();
  const screenWidth = window.innerWidth

  const width = screenWidth <= 500 ? 4 : 5 
  const height = screenWidth <= 500 ? 4 : 5


  useEffect(()=>{
    if (!cakeRef.current) console.log(`retornando aqui ${cakeRef.current}`);
  
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(cakeRef.current.rotation, {
    y: .2,
    duration: 2,
    ease: "power1.inOut"
    })
    .to(cakeRef.current.rotation, {
    y: 0,
    duration: 1,
    ease: "power1.inOut"
    })
    .to(cakeRef.current.rotation, {
    y: -.2,
    duration: 2,
    ease: "power1.inOut"
    })
    .to(cakeRef.current.rotation, {
    y: 0,
    duration: 1,
    ease: "power1.inOut"
    });

  },[])

  useEffect(()=>{
  
    const tl = gsap.timeline();
  
    tl.to(cakeRef.current.position, { 
      y: 40,
      duration: .9,
      ease: "power2.out",
      onComplete: () => {
        setSelectedCurrent(selected)
      }
    }).to(cakeRef.current.position, { 
      y: 0,
      duration: .5,
      ease: "elastic.out(1,1.2)",
    });
  },[selected])

  return (
    <group>
      <mesh rotation={[0, 0, 0]} ref={cakeRef}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={arrayTextures[selectedCurrent]} transparent />
      </mesh>
      <ContactShadows
        position={[2, 2, 3]} 
        opacity={1}
        blur={2}
      />
    </group>
  )
}

export default PlaneMaterial
