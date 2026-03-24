import Background from '/images/backgroundPhrase.png'
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import PlaneMaterial from './PlaneMaterial';
import popularProducts from './constants/PopularProducts';
import SelectorCard from './SelectorCard';
import { useState } from 'react';

const Selector = () => {

  const[selected,setSelected]=useState(0)
  const[selectedCurrent, setSelectedCurrent]=useState(selected)

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#e7a9ba] relative'>
      <img 
        src={Background}
        alt="background" 
        className='absolute top-0 w-full h-[140vh] bg-cover opacity-45 flex-none'
      />

      <h3 className='font-extrabold text-[60px] max-md:text-[30px] text-center uppercase z-10 absolute top-0 left-0 m-5 max-md:m-0 max-md:mt-2 text-[#eed7af] -rotate-10'>
        Most Populars
      </h3>

      {/*-------------------------3d object-------------------*/}
      <Canvas className="h-[60%] w-full z-50 bg-transparent pointer-events-none">
        <ambientLight intensity={0.7} color="#ffffff" />
        <hemisphereLight skyColor="#e0c2d6" groundColor="#523536" intensity={0.5} />
        <directionalLight 
          intensity={2} 
          position={[5, 10, 5]} 
        />
        <pointLight intensity={1} position={[-3, 2, -3]} color="#ffc0cb" />
        <Float speed={5} floatIntensity={.5} rotationIntensity={.5}>
          <PlaneMaterial
            selected={selected}
            selectedCurrent={selectedCurrent}
            setSelectedCurrent={setSelectedCurrent}
          />
        </Float>
      </Canvas>

      {/*-------------------------selector-------------------*/}
      <div className='w-full h-[40%] flex flex-row max-md:flex-col items-center'>
        <div className='h-full w-[40%] max-md:w-full flex flex-col justify-center items-start p-3'>
          <h3 className='text-[#eed7af] font-extrabold text-[40px] max-md:text-[20px] z-10 uppercase'>
            {popularProducts[selected].name}
          </h3>
          <p className='text-[15px] max-md:text-[10px] font-sans font-semibold text-gray-600 z-10'>
            {popularProducts[selected].description}
          </p>
        </div>
        <div className='h-full max-md:h-40 w-[60%] max-md:w-full flex flex-row justify-evenly items-center bg-[#eed7af] rounded-2xl z-10'>
          {
            popularProducts.map((product)=>(
              <SelectorCard 
                key={product.id}
                product={product}
                setSelected={setSelected}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Selector
