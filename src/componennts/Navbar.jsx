import { Link } from "react-router-dom"
import Logo from '/images/logo.png'
import CartIcon from '/images/cart.png'
import useCartStore from "../store/CartSlice"

const Navbar = () => {

  const getTotalQuantity = useCartStore(state=>state.getTotalQuantity)

  const totalQuantity = getTotalQuantity()

  return (
    <section className="fixed bg-transparent w-full h-12.5 z-60 flex flex-row justify-between items-center">
      <Link to='/' >
        <img 
          src={Logo}
          alt="logo"
          className="h-12.5 w-12.5 border border-white bg-linear-to-r from-[#a4e8e0] to-[#f4ae9c] rounded-full ml-5 mt-2" 
        />
      </Link>
      <div className="flex flex-row justify-center items-center">
        <Link 
          to='/shop' 
          className="font-semibold font-sans text-[20px] mr-5 text-[#2f2f2f]"
          style={
            {fontFamily: 'MyFonnt'}
          }
        >
          shop
        </Link>
        <Link 
          className="font-sans text-[20px] mr-5 text-[#6e6e6e] flex flex-row justify-center items-center" 
          to='/cart'
        >
          <img 
            src={CartIcon} 
            alt="icon" 
            className="h-5 w-5"
          />
          <p className="text-[20px] font-semibold text-[#2f2f2f]">{totalQuantity}</p>
        </Link>
      </div>
    </section>
  )
}



export default Navbar
