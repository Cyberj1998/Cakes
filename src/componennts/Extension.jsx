import Background from '/images/backgroundPhrase.png'
import { useState } from 'react'
import CakePlaneMaterial from './CakePlaneMaterial'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import Facebook from '/images/facebook.svg'
import Instagram from '/images/instagram.svg'
import Whatsapp from '/images/whatsapp.svg'
import Delivery from '/images/delivery.svg'
import Cart from '/images/cart.svg'


const Extension = () => {

  const[cakeBite, setCakeBite]=useState(0)

  const handleCakeState = () => {
    if(cakeBite === 0){
      setCakeBite(1)
    }else{
      setCakeBite(0)
    }
  }

  return (
    <div className='h-[50vh] relative flex flex-row justify-between items-center w-full bg-[#e7a9ba] z-500'>
      <img 
        className="absolute top-0 w-full h-full bg-cover opacity-45"
        src={Background} 
        alt="backgound" 
      />
      <div className='h-full w-[30%] z-10 flex flex-col items-end justify-center'>
        <h3 className='text-[30px] font-extrabold text-[#eed7af] ml-2'>Contact</h3>
        <p className='font-sans text-[15px] ml-2'>+56 58457852</p>
        <ul className='flex flex-row w-full justify-end items-center'>
          <li>
            <img 
              src={Facebook}
              alt="social" 
              className='h-10 w-10 cursor-pointer ml-2'
            />
          </li>
          <li>
            <img 
              src={Instagram}
              alt="social" 
              className='h-10 w-10 cursor-pointer ml-2'
            />
          </li>
          <li>
            <img 
              src={Whatsapp}
              alt="social" 
              className='h-10 w-10 cursor-pointer ml-2'
            />
          </li>
        </ul>
      </div>
      <div className='h-full w-[30%] grid items-center'>
        <Canvas 
          onClick={()=>handleCakeState()}
          className="z-50 bg-transparent pointer-events-none cursor-pointer"
        >
          <ambientLight intensity={0.7} color="#ffffff" />
          <hemisphereLight skyColor="#e0c2d6" groundColor="#523536" intensity={0.5} />
          <directionalLight 
            intensity={2} 
            position={[5, 10, 5]} 
          />
          <pointLight intensity={1} position={[-3, 2, -3]} color="#ffc0cb" />
          <Float speed={5} floatIntensity={.5} rotationIntensity={.5}>
            <CakePlaneMaterial
              className='cursor-pointer' 
              cakeBite={cakeBite}
            />
          </Float>
        </Canvas>
      </div>
      <div className='h-full w-[30%] z-10 flex flex-col justify-center items-start'>
        <ul className='flex flex-col'>
          <li className='flex flex-col'>
            <h3 className='text-[30px] font-extrabold text-[#eed7af] mr-2'>shop</h3>
            <div className='flex flex-row items-center w-full'>
              <img 
                className='h-10 w-10 cursor-pointer mr-2'
                src={Cart} 
                alt="cart" 
              />
              <p className='font-sans text-[15px] mr-2'>direccion de la tienda</p>
            </div>
          </li>
          <li className='flex flex-col'>
            <h3 className='text-[30px] font-extrabold text-[#eed7af] ml-2'>Delivery</h3>
            <div className='flex flex-row items-center'>
              <img 
                className='h-10 w-10 cursor-pointer mr-2'
                src={Delivery} 
                alt="delivery" 
              />
              <p className='font-sans text-[15px] mr-2'>entrega a domicilio incluida</p>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Extension
