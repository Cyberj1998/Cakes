import FlavorCard from "./FlavorCard"
import lateralContent from "./constants/LateralScrollContent"
import { gsap } from "gsap"
import { useRef, useEffect, useState } from "react"

const LateralScroll = () => {

  const sliderRef = useRef();

  useEffect(()=>{

    const windowWidth = window.innerWidth
    const containerWidth = 2000

    const scrollAmount = containerWidth - windowWidth

    gsap.to('.sliderContainer', {
      x: `-${scrollAmount}px`,
      scrollTrigger: {
        trigger: '.sliderContainer',
        start: 'top top',
        end: '500px',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
      }
    });

  },[])

  return (

      <div ref={sliderRef} className="sliderContainer border-2 border-amber-500 w-500 max-md:w-full h-125 max-md:h-fit flex flex-row max-md:flex-col bg-[#eed7af] justify-evenly items-center">
        <div className=" border-2 border-purple-600 flex flex-col justify-around items-center h-fit w-100">
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#e7a9ba] text-center m-0">Fasdasdasd</h3>
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#eed7af] bg-[#e7a9ba] w-fit text-center m-0 p-0 -rotate-6 border-3 border-[#eed7af] -mt-3">Flavor</h3>
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#e7a9ba] text-center m-0 -mt-4">Flavasdasor</h3>
        </div>
        {
          lateralContent.map((item)=>(
            <FlavorCard 
              key={item.id}
              item={item}
              className="border-2 border-red-500 h-100 w-100 rounded-2xl m-10"
            />
          ))
        }
      </div>
  )
}



export default LateralScroll


//<div className="flavorTrigger border-2 border-blue-600 h-125 max-md:h-fit w-fit max-md:w-full flex justify-center items-center bg-[#eed7af]">