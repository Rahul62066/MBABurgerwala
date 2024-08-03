import React from 'react'
import {Link} from 'react-router-dom'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import CardOfItem from './CardOfItem'
const Cart = () => {
  return (
    <section className='cart  bg-pink-300 w-full h-screen'>
      <main className='h-full bg-white max-w-4xl m-auto p-8'>
<CardOfItem title={"Cheese Burger"} img={burger1} value={0} increment={()=>increment(1)} decrement={()=>decrement(1)} />
<CardOfItem title={"Veg Cheese Burger"} img={burger2} value={0} increment={()=>increment(2)} decrement={()=>decrement(2)} />
<CardOfItem title={"Cheese Burger with french fries"} img={burger3} value={0} increment={()=>increment(3)} decrement={()=>decrement(3)} />
<article className=' w-full p-8 h-60 gap-1 flex flex-col'>
  <div className='flex justify-between mx-4'>
    <div className=' font-bold '>Sub Total</div>
    <div className='font-semibold'>₹{2000}</div>
  </div>
  <div className='flex justify-between mx-4'>
    <div className=' font-bold '>Tax</div>
    <div className='font-semibold'>₹{2000*0.18}</div>
  </div>
  <div className='flex justify-between mx-4'>
    <div className=' font-bold '>Shipping Charges</div>
    <div className='font-semibold'>₹{200}</div>
  </div>
  <div className='flex justify-between mx-4'>
    <div className=' font-bold '>Total</div>
    <div className='font-semibold'>₹{2000 + 2000 * 0.18 + 200}</div>
  </div>
  <div className='w-full p-4 flex justify-end mr-10'>
  <Link className='border-black border bg-pink-900 text-white font-bold text-xl rounded-md px-10 py-2 w-40 hover:bg-pink-950' to='/shipping'>Checkout</Link>
  </div>
  
</article>
      </main>
    </section>
  )
}

export default Cart