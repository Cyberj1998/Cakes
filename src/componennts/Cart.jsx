import Background from '/images/backgroundPhrase.png';
import productList from './constants/ProductList';
import CartCard from './CartCard';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Button from './Button';


const Cart = () => {

  const [selectedDay, setSelectedDay] = useState(null)
  const[modal, setModal]=useState(false)
  const[adress, setAdress]=useState('')
  const[input, setInput]=useState('')

  const today = new Date()

  const handlerModal = () => {
    setModal(prev => !prev)
    if(modal){
      setAdress(input)
    }
  }

  const handler = () => {
    alert('cart')
  }


  return (
    <section className='h-screen w-full bg-[#e7a9ba] overflow-hidden flex justify-center items-center overflow-hidden'>
      
      
      {
        modal ? (
          <div className='modal z-50 bg-[#eed7af] h-[90%] w-[35%] absolute rounded-2xl mt-3 flex flex-col justify-evenly items-center'>
            <textarea 
              placeholder='Escriba su direccion aqui'
              className='border border-black h-[40%] w-[90%]'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              onClick={()=>handlerModal()}
              className='p-3 rounded-2xl cursorpointer bg-[#e7a9ba] cursor-pointer'
            >
              <p className='text-[20px] max-md:text-[15px] font-semibold'>
                Fijar Direccion
              </p>
            </button>
          </div>
        ) : ''
      }


      <img 
        className="absolute top-0 w-full max-md:w-125 h-[140vh] max-md:h-screen bg-cover opacity-45"
        src={Background} 
        alt="backgound" 
      />
      <div className='rounded-2xl h-[90%] w-[90%] z-10 flex flex-row max-md:flex-col justify-between items-center'>
        <div className='h-full max-md:h-[50%] w-[60%] max-md:w-full flex flex-col justify-start items-center overflow-y-scroll overflow-x-hidden'>
          {
            productList.map((product)=>(
              <CartCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
        <div className='border-2 border-purple-600 h-full max-md:h-[50%] w-[40%] max-md:w-full flex flex-col justify-evenly items-center'>
          <DayPicker
            className='border-2 border-amber-400'
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            month={today} 
            fixedWeeks 
          />
          {selectedDay && (
            <p className='mt-4 text-center'>
              Dia Seleccionado: {selectedDay.toLocaleDateString()}
            </p>
          )}
          <button
            onClick={()=>setModal(prev => !prev)} 
            className='p-3 rounded-2xl cursorpointer bg-[#eed7af] cursor-pointer'
          >
            <p className='text-[20px] max-md:text-[15px] font-semibold'>
              Agregar Direccion
            </p>
          </button>

          <Button
            handler={handler} 
            name={'Comprar'}
          />
        </div>
      </div>
    </section>
  )
}

export default Cart
