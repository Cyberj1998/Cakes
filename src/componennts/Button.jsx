import CakeEmoji from '/images/cakeEmoji.svg'

const Button = ({ handler, name }) => {
  return (
    <button 
      className='cursor-pointer h-12.5 w-50 bg-linear-to-r from-[#a4e8e0] to-[#f4ae9c] rounded-2xl flex flex-row justify-center items-center border border-white z-55'
      onClick={handler ? ()=>handler() : ''}
    >
      <p className='text-white font-bold text-[15px] uppercase'>
        {name ? `${name}` : ''}
      </p>
      <img 
        src={CakeEmoji}
        alt="emoji" 
        className='h-6.25 w-6.25 m-2'
      />
    </button>
  )
}

export default Button
