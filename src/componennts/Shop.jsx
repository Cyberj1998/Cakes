import productList from "./constants/ProductList"
import ProductCard from "./ProductCard"
import Background from '/images/backgroundPhrase.png';


const Shop = () => {

  return (
    <section className="h-screen w-full bg-[#e7a9ba] flex justify-center items-center">
      <img 
        className="absolute top-0 w-fu  ll max-md:w-125 h-[140vh] max-md:h-screen bg-cover opacity-45"
        src={Background} 
        alt="backgound" 
      />
      <div className="border border-white h-[90%] w-[90%] rounded-2xl mt-10 flex justify-center flex-wrap overflow-y-scroll z-10">
        {
          productList.map((product)=>(
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Shop

/*
rosado - [#e7a9ba]
pastel - [#eed7af]
*/
