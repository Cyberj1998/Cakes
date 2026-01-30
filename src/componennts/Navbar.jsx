import { Link } from "react-router-dom"
import Logo from '/images/logo.png'

const Navbar = () => {
  return (
    <section className="fixed bg-transparent w-full h-12.5 z-60 flex flex-row justify-between items-center">
      <Link to='/' >
        <img 
          src={Logo}
          alt="logo"
          className="h-12.5 w-12.5 border border-white bg-linear-to-r from-[#a4e8e0] to-[#f4ae9c] rounded-full ml-5 mt-2" 
        />
      </Link>
      <div>
        <Link 
          to='/shop' 
          className="font-sans text-[20px] mr-5 text-[#6e6e6e]"
          style={
            {fontFamily: 'MyFonnt'}
          }
        >
          shop
        </Link>
        <Link 
          className="font-sans text-[20px] mr-5 text-[#6e6e6e]" 
          to='/cart'
        >
          cart
        </Link>
      </div>
    </section>
  )
}



export default Navbar
