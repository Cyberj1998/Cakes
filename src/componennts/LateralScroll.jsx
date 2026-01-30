import FlavorCard from "./FlavorCard"
import lateralContent from "./constants/LateralScrollContent"
import { gsap } from "gsap"
import { useRef, useEffect, useState } from "react"

const LateralScroll = () => {

  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    if (sliderRef.current) {

      const sliderWidth = sliderRef.current.offsetWidth;

      setWidth(sliderWidth);
      console.log(sliderWidth)
      console.log('Ancho del slider:', width);
    }
  },[])

  useEffect(()=>{

    console.log(`useEffect de la animacion ${width}px`)

    gsap.to('.flavorTrigger', {
      x: `-${width}px`,
      scrollTrigger: {
        trigger: '.flavorTrigger',
        start: 'top top',
        end: `${width}px`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      }
    });


  },[])

  return (
    <section className="flavorTrigger h-screen w-fit max-md:w-full bg-[#eed7af]">
      <div ref={sliderRef} className="sliderContainer w-fit max-md:w-full h-full max-md:h-fit flex flex-row max-md:flex-col bg-[#eed7af] justify-evenly items-center">
        <div className="flex flex-col justify-around items-center h-fit w-fit">
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
    </section>
  )
}

export default LateralScroll

