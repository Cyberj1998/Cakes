import Background from '/images/backgroundPhrase.png';
import CartCard from './CartCard';
import { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import Button from './Button';
import useCartStore from '../store/CartSlice';


const Cart = () => {

  const cart = useCartStore(state=>state.cart)
  const getTotalPrice = useCartStore(state=>state.getTotalPrice)

  const totalPrice = getTotalPrice()


  useEffect(()=>{
    console.log(cart)
  },[])

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


  const handleShareToWhatsApp = () => {
    
    const phoneNumber = '50219524'; 
    
    const messageItems = cart.map(item => {
        return `${item.name}, Precio: ${item.price}, Cantidad: ${item.quantity}`;
    }).join('\n');

    const message = `${messageItems}\nTotal a pagar: ${totalPrice},  Fecha: ${selectedDay}, Direccion: ${adress}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };


  return (
    <section className='h-screen w-full bg-[#e7a9ba] overflow-hidden flex justify-center items-center'>
      {
        modal ? (
          <div className='modal z-50 bg-[#eed7af] h-[90%] max-md:h-[80%] w-[35%] max-md:w-[90%] absolute rounded-2xl mt-3 flex flex-col justify-evenly items-center'>
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
            cart.map((product)=>(
              <CartCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
        <div className='h-full max-md:h-[50%] w-[40%] max-md:w-full flex flex-col justify-evenly items-center'>
          <p className='z-50 font-semibold text-black text-[20px]'>
            Total a pagar: {totalPrice}
          </p>
          <DayPicker
            className='max-md:h-60 max-md:w-75 border-2 border-blue-500'
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
            className='p-3 rounded-2xl cursorpointer bg-[#eed7af] cursor-pointer m-1'
          >
            <p className='text-[20px] max-md:text-[15px] font-semibold'>
              Agregar Direccion
            </p>
          </button>

          <Button
            handler={()=>handleShareToWhatsApp()} 
            name={'Comprar'}
          />
        </div>
      </div>
    </section>
  )
}

export default Cart
