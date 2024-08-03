import React from 'react'
import {Link} from 'react-router-dom'
const PaymentSuccessful = () => {
  return (
    <section className='paymentSuccessful w-full h-[60vh] bg-pink-800  '>
        <main className='h-full bg-white max-w-4xl m-auto p-8 flex flex-col items-center gap-4'>
            <div className='uppercase text-center m-8 font-bold text-5xl'>Order Confirmed</div>
            <div className='font-semibold'>Order Placed Successfully, You can check order status below</div>
            <Link className='border-black border bg-pink-900 text-white font-bold text-xl rounded-md px-4 py-2 w-40 hover:bg-pink-950' to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccessful