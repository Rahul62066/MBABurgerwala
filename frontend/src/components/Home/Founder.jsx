import React from 'react'
import me from '../../assets/me.jpg'
import {motion} from 'framer-motion'
const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (<>
   
    <section className='founder w-full h-[80vh] bg-pink-800'>
<motion.div
{...options}
className='h-full flex  justify-center flex-col items-center'
>
    <img className='h-56 rounded-[100%] ' src={me} alt="Founder" height={200} width={200} />
    <div className=' p-2 text-2xl font-bold font-serif'> Lavkush Raj</div>
    <div className=' p-2 text-xl font-semibold'>Hey, I am Lavkush Raj, the founder of MBA Burger Wala.
        <br />
        Our aim is to create the most tasty burger on planet.
    </div>
</motion.div>
    </section>
  </>)
}

export default Founder