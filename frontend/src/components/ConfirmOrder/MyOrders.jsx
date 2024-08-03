import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const MyOrders = () => {
  const array =[1,2,3,4,5,6,7,8,9,10]
  return (<>
    <section className='w-full h-screen bg-pink-700'>
      <main className='max-w-4xl bg-white m-auto h-full p-8 overflow-x-auto '>
        <table className='w-full text-center  ' >
          <thead>
            <tr className='bg-gray-400 '>
              <th className='bg-gray-950 text-white rounded-tl-md p-3'>Order Id</th>
              <th className='bg-gray-950 text-white p-3'>Status</th>
              <th className='bg-gray-950 text-white p-3 '>Item Qty</th>
              <th className='bg-gray-950 text-white p-3'>Amount</th>
              <th className='bg-gray-950 text-white p-3'>Payment Method</th>
              <th className='bg-gray-950 text-white rounded-tr-md p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
           { array.map((i) =>(
              <tr key={i}>
              <td className='text-slate-900 bg-gray-300 font-bold p-1'>#sksdfjgksjk</td>
              <td className='text-slate-900 bg-gray-300 font-bold p-1'>Processing</td>
              <td className='text-slate-900 bg-gray-300 font-bold p-1'>23</td>
              <td className='text-slate-900 bg-gray-300 font-bold p-1'>₹{21321}</td>
              <td className='text-slate-900 bg-gray-300 font-bold p-1'>COD</td>
              <td className='flex justify-center bg-gray-300 flex-col items-center p-2' ><Link className='text-pink-900 text-xl' to={`/order/${"asdfsd"}`}><AiOutlineEye className='bg-gray-300' /></Link></td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
    </>)
}

export default MyOrders