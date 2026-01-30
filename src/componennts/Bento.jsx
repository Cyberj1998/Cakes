import Dip from '/images/dip.png'
import BentoCardsContent from './constants/BentoCradsContent'
import BentoCard from './BentoCard'


const Bento = () => {

  return (
    <div className='h-[200vh] w-full bg-[#eed7af] flex flex-col justify-between items-center border-2 border-blue-700'>
      <img 
        src={Dip} 
        alt="dip" 
        className={`w-full h-37.5 max-md:h-15`}
      />
      <div className='w-[80%] h-[90%] flex flex-col justify-between'>
        <h3 className='text-[#e7a9ba] text-[60px] max-md:text-[50px] font-extrabold'>Bento Box</h3>
        <div className='h-[90%] w-full grid grid-cols-3 grid-rows-6 max-md:grid-rows-10'>
          {BentoCardsContent.map((card)=>(
            <BentoCard 
              key={card.id}
              card={card}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bento

