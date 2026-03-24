import clsx from 'clsx'
import Logo from '/images/logo.png'

const Marquee = () => {

  const phrases = ['joyfull experience', 'quality ingredients', 'pressicion crafting']


  const MarqueeContent = () => (
    <div className='w-full h-fit flex flex-row items-center bg-[#e7a9ba] whitespace-nowrap'>
      {phrases.map((phrase, i)=>(
        <>
          <h3
            key={i}
            className="text-[50px] p-0 m-0 font-extrabold leading-none uppercase text-[#eed7af] [text-box: trim-both_cap_alphabetic]" 
          >
            {phrase}
          </h3>
          <img 
            src={Logo}
            alt="logo"
            className='h-25 w-25' 
          />
        </>
      ))}
    </div>
  )

  return (
    <div className='relative flex w-full items-center overflow-hidden select-none'>
      <div className='flex relative items-center whitespace-nowrap'>
        <div className={clsx( "marquee-track animate-marquee flex",  )}>
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  )
}

export default Marquee
