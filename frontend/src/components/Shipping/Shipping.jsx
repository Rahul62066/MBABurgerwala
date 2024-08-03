import React from 'react'
import {Country,State} from 'country-state-city'
const Shipping = () => {
  return (
    <section className='shipping w-full h-screen bg-pink-800  '>
        <main className='h-full bg-white max-w-4xl m-auto p-8'>
            <div className='uppercase text-center m-12 font-bold text-5xl'>Shipping Details</div>
            <form className='flex flex-col items-center '>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>H.No.</div>
                    <input className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base' type="text" placeholder='Enter House No.'/>
                </div>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>City</div>
                    <input className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base' type="text" placeholder='Enter City'/>
                </div>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>Country</div>
                    <select className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base'>
                        <option value="">Country</option>
                        {Country && Country.getAllCountries().map((i)=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))}
                    </select>
                </div>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>State</div>
                    <select className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base'>
                        <option value="">State</option>
                        {State && State.getStatesOfCountry("IN").map((i)=>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))}
                    </select>
                </div>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>Pin Code</div>
                    <input className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base' type="text" placeholder='Enter Pincode'/>
                </div>
                <div className='w-[70%] flex items-center justify-between'>
                    <div className='font-bold text-xl'>Phone No.</div>
                    <input className='w-96 py-2 px-4 outline-none border-gray-400 rounded border m-4 text-base' type="text" placeholder='Enter Phone No.'/>
                </div>

                <button className='bg-pink-900 text-white outline-none border-none px-4 py-2 rounded-xl hover:bg-pink-950 m-4 text-center cursor-pointer text-xl' type='submit'>Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping