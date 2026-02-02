import CornerDip from '/images/corner_dip.png';
import Background from '/images/backgroundPhrase.png';
import productList from './constants/ProductList';
import Button from './Button';

const DetailsPage = () => {

  const product = productList[0]

  const handler = () => {
    alert('details')
  }

  return (
    <div className="h-screen w-full flex flex-row justify-center items-center bg-[#e7a9ba]">
      <img
        className="wave h-screen max-md:h-[60vh] w-125 max-md:w-80 absolute top-0 left-0 max-md:right-0 rotate-180 max-md:rotate-0 z-10" 
        src={CornerDip}
        alt="corner dip" 
      />
      <img 
        className="absolute top-0 w-full max-md:w-125 h-[140vh] max-md:h-screen bg-cover opacity-45"
        src={Background} 
        alt="backgound" 
      />
      <div className='h-[90%] w-[90%] z-20 flex flex-row max-md:flex-col justify-between max-md:justify-center items-center'>
        <img 
          src={product.image}
          alt="product image"
          className='h-87.5 max-md:h-50 w-87.5 max-md:w-50' 
        />
        <div className='h-full max-md:h-[50%] w-100 max-md:w-full flex flex-col justify-center items-center'>
          <h3 className="font-extrabold text-[40px] text-[#eed7af] text-center">
            {product.name}
          </h3>
          <p className="text-[20px] font-semibold m-2 text-center">
            {product.description}
          </p>
          <h3 className="text-[20px] font-semibold m-2">$: {product.price}</h3>
          <Button handler={handler} />
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
