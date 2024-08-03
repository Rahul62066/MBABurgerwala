import React from 'react'
import {motion} from 'framer-motion'
const MenuCard = ({itemNum,burgerSrc,price,title,handler,delay}) => {
  return (
   
    <>
   <motion.div
   initial={{
    x:"-100%",
    opacity:0,
  }}
  whileInView={{
    x:0,
    opacity:1,
  }}
  transition={{
    delay,
  }}
  className='bg-white w-96 rounded shadow-md'
  >
        <div className='rounded-t-md bg-pink-900 p-4 flex items-center text-white h-16'>Item {itemNum}</div>
    <main className='p-4 flex flex-col items-center'>
        <img className='h-60 w-[100%]' src={burgerSrc} alt="burgerImage" />
        <div className='flex text-xl justify-center items-center'>₹{price}</div>
        <div className='uppercase '>{title}</div>
        <button className='w-[100%] bg-pink-900 px-8 py-4 rounded-md cursor-pointer font-bold text-white hover:bg-pink-950' onClick={(itemNum)=>handler(itemNum)}>Buy Now</button>
    </main>
    </motion.div>
    </>
   
  )
}

export default MenuCard