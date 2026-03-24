

const FlavorCard = ({ item }) => {
  return (
    <div className={`h-100 max-md:h-50 w-125 max-md:w-60 m-10 rounded-2xl relative overflow-visible flex justify-center items-center ${item.id === 0 || item.id === 2 ? 'rotate-6' : '-rotate-6'}`}>
      <img
        src={item.backgroundImage}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
      />
      <img 
        src={item.primaryImmage}
        alt="secondary image"
        className="absolute h-100 max-md:h-50 w-100 max-md:w-50 bottom-0 -mt-30"
      />
      <img 
        src={item.secondaryImage}
        alt="secondary image"
        className="relative h-80 max-md:h-60 -mt-30 max-md:mt-0"
      />
      <h3 className="absolute bottom-0 left-0 m-5 text-[#eed7af] text-[40px] max-md:text-[20px] font-extrabold">{item.name}</h3>
    </div>
  )
}



export default FlavorCard
