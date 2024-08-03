import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder bg-pink-500 w-full h-[60vh] '>
        <main className='h-full bg-white max-w-4xl m-auto p-8'>
            <div className='uppercase text-center m-12 text-2xl font-bold'>Confirm Order</div>
            <form className='flex flex-col items-center'>
                <div className='w-[70%] flex items-center justify-between bg-gray-100 m-4 rounded-md p-4 border-gray-500 border'>
                    <div className='font-bold text-xl'>Cash On Delivery</div>
                    <input  type="radio" name="payment" />
                </div>
                <div className='w-[70%] flex items-center justify-between bg-gray-100 m-4 rounded-md p-4  border-gray-500 border'>
                    <div className='font-bold text-xl'>Online</div>
                    <input type="radio" name="payment" />
                </div>
                <button className='bg-pink-900 text-white outline-none border-none px-4 py-2 rounded-xl hover:bg-pink-950 m-4 text-center cursor-pointer text-xl' type='submit'>Place Order </button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder