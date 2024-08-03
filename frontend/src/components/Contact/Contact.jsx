import React from 'react'
import {motion} from 'framer-motion'
// import burger2 from '../../assets/burger2.png'
const Contact = () => {
  return (
    <section className='contact h-screen w-full bg-no-repeat flex  justify-center flex-col items-center box-border bg-pink-300'>
      {/* <div className='flex'> */}
      <motion.form 
      initial={{
        x:"-100%",
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1,
      }}
      transition={{
        delay:0.2,
      }}
      className='flex flex-col justify-center items-center bg-white w-[60%] h-[80%] p-8 rounded-3xl'>
      <div className='text-3xl uppercase font-semibold'>Contact Us</div>
      <input className='p-4 outline-none border border-gray-400 w-[60%] rounded-md m-2' type="text" placeholder='Name' />
      <input className='p-4 outline-none border border-gray-400 w-[60%] rounded-md m-2' type="email" placeholder='Email' />
      <textarea className ='p-4 outline-none border border-gray-400 w-[60%] rounded-md m-2' placeholder='Message...' cols="30" rows="10"></textarea>
      <button className='p-4 outline-none border border-gray-400 w-[60%] rounded-md m-2 bg-pink-900 cursor-pointer text-white text-2xl font-bold hover:bg-pink-950' type='submit'>Send</button>
      </motion.form>
      {/* <motion.div className='formBorder w-10 h-[80%] bg-white rounded-e-3xl'>

      <motion.div className='w-52 h-52 absolute t-[50%] translate-x-1/2 translate-y-1/2'>
        <img className='w-[100%]'src={burger2} alt="Burger" />
        </motion.div>
      </motion.div> */}
      {/* </div> */}
    </section>
  )
}

export default Contact