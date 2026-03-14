import FlavorCard from "./FlavorCard"
import lateralContent from "./constants/LateralScrollContent"
import { gsap } from "gsap"
import { useRef, useEffect } from "react"
import Extension from "./Extension"

const LateralScroll = () => {

  const sliderRef = useRef();

  useEffect(()=>{

    const windowWidth = window.innerWidth
    const containerWidth = 2000

    const scrollAmount = containerWidth - windowWidth

    if (windowWidth >= 1024) {  
      gsap.to('.sliderContainer', {
        x: -scrollAmount,
        scrollTrigger: {
          trigger: '.sliderContainer',
          start: 'top top',
          end: "100vh",
          pin: true,
          pinSpacing: false,
          scrub: true,
          //markers: true,
        }
      });
    }
  },[])

  return (
      <div ref={sliderRef} className="sliderContainer w-500 max-md:w-full h-screen max-md:h-fit flex flex-row max-md:flex-col bg-[#eed7af] justify-evenly items-center">
        <div className="flex flex-col justify-around items-center h-fit w-100">
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#e7a9ba] text-center m-0">Amazing</h3>
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#eed7af] bg-[#e7a9ba] w-fit text-center m-0 p-0 -rotate-6 border-3 border-[#eed7af] -mt-3">Cakes</h3>
          <h3 className="text-[50px] max-md:text-[40px] font-extrabold uppercase text-[#e7a9ba] text-center m-0 -mt-4">Everywhere</h3>
        </div>
        {
          lateralContent.map((item)=>(
            <FlavorCard 
              key={item.id}
              item={item}
              className="h-100 w-100 rounded-2xl m-10"
            />
          ))
        }
      </div>
  )
}



export default LateralScroll