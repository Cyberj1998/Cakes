import Right from '/images/right.png'
import Left from '/images/left.png'
import Delete from '/images/trash.png'
import useCartStore from '../store/CartSlice';



const CartCard = ({ product }) => {

  const increaseQuantity = useCartStore(state=>state.increaseQuantity)
  const decreaseQuantity = useCartStore(state=>state.decreaseQuantity)
  const removeFromCart = useCartStore(state=>state.removeFromCart)

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId)
  }

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId)
  }

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  return (
    <div className='border border-white flex shrink-0 w-full h-30 m-2 rounded-2xl flex-row justify-between items-center backdrop-blur-[3px]'>
      <div className='h-full w-[20%] flex flex-col justify-center items-center'>
        <img 
          src={product.image} 
          alt="product image" 
          className='h-22.5 w-22.5 m-1'
        />
        <h3 className='text-[12px] max-md:text-[10px] text-center font-semibold'>
          {product.name}
        </h3>
      </div>
      <div className='h-full w-[40%] flex flex-row justify-evenly items-center'>
        <button onClick={()=>handleDecreaseQuantity(product.id)}>
          <img 
            src={Left} 
            alt="arrow" 
            className='h-20 max-md:h-10 w-20 max-md:w-10 cursor-pointer'
          />
        </button>
        <h3 className='m-2 text-[30px] max-md:text-[15px]'>
          {product.quantity}
        </h3>
        <button onClick={()=>handleIncreaseQuantity(product.id)}>
          <img 
            src={Right} 
            alt="arrow" 
            className='h-20 max-md:h-10 w-20 max-md:w-10 cursor-pointer'
          />
        </button>
      </div>
      <div className='h-full w-[30%] flex flex-col justify-evenly items-center'>
        <h3 className='m-2 text-[20px] max-md:text-[20px]'>
          $: {product.price}
        </h3>
        <button onClick={()=>handleRemove(product.id)}>
          <img 
            src={Delete}
            alt="delete" 
            className='h-8 max-md:h-5 w-8 max-md:w-5 cursor-pointer'
          />
        </button>
      </div>
    </div>
  )
}

export default CartCard
