import React from 'react'
import {Link} from 'react-router-dom'
import {MdError} from 'react-icons/md'
import Tip from '../UIcomponents/Tip'
const NotFound = () => {
  return (
    <section className='bg-pink-500 w-full h-[60vh]'>
        <main className='bg-white h-full max-w-4xl m-auto p-8 flex flex-col items-center'>
            <div className='flex items-center mt-12'>
              <Tip name="Not Found" icon={<MdError className='text-7xl' />} />
                
                <div className='uppercase items-center text-4xl font-bold mx-4'>404</div>
            </div>
            <div className='flex items-center text-xl font-semibold m-10'>Page not found, click below to go to home page.</div>
            <Link className='bg-pink-900 text-white px-4 py-2 rounded  text-center text-xl font-bold hover:bg-pink-950' to="/">Go to Home</Link>
        </main>
    </section>
  )
}

export default NotFound