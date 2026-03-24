import Button from "./Button"
import { Link } from "react-router-dom"
import useCartStore from "../store/CartSlice";

const ProductCard = ({ product }) => {

  const addToCart = useCartStore(state=>state.addToCart)

  const handler = (product) => {
    addToCart(product)
  }

  return (
    <div className='h-87.5 w-62.5 bg-[#eed7af] m-2 rounded-2xl flex flex-col justify-center items-center'>
      <Link to='/details'>
        <img 
          src={product.image}
          alt="product image"
          className="h-37.5" 
        />
      </Link>
      <h3 className="font-extrabold text-[20px] text-[#e7a9ba]">{product.name}</h3>
      <h3 className="text-[20px] font-semibold m-2">$: {product.price}</h3>
      <Button 
        handler={()=>handler(product)} 
        name={'anadir al carrito'}
      />
    </div>
  )
}

export default ProductCard
