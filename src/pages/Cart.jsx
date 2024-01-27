import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  // by using useSelector we can access the state form cartSlice
  const { cart } = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

// using reduce method 
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price , 0))
  } , [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div  className='flex flex-col sm:flex-row mx-auto w-full mt-6'> 

            {/* cartPage part - 1st */}
              <div className='sm:w-3/4'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>
              

{/* cartPage part - 2nd */}
              <div className='flex flex-col items-center '>
                <div className='m-5 p-8 '>
                  <div className='text-[15px] font-sans uppercase font-bold text-green-600'>Your Cart</div>
                  <div className='text-4xl font-sans uppercase font-bold  text-green-600 mb-7'>Summary</div>
                  <p>
                    <span className='font-semibold  text-gray-700'>Total Items : {cart.length}</span>
                  </p>
                </div>

<div className='m-5 p-8 mt-[50vh]'>
  <p className='font-semibold  text-gray-700'> Total Amount : <span className='font-bold text-black'> ${totalAmount}</span></p>
  <button className='w-[300px] mt-3 bg-green-700 rounded-md h-[40px] text-center text-white font-bold '>Checkout Now</button>
</div>
              </div>
            </div>
          )

          :

          (
            <div className='flex flex-col justify-center items-center'>
              <h1 className=' font-bold text-2xl uppercase mt-2 '>Cart is Empty</h1>

              {/* link tag which will redirect to home page */}
              <Link to={"/"}>
                <button className='bg-green-600 mt-3 w-[100px] h-[40px] rounded-md font-semibold hover:opacity-90 text-[12px] transition duration-100 ease-in'>
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }
    </div>
  )
}

export default Cart