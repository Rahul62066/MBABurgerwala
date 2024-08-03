import React from 'react'
import {motion} from 'framer-motion'
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
  return (
    <section className='login w-full h-[60vh] bg-pink-500 bg-no-repeat flex justify-center items-center'> 
         <motion.button
         initial={{
            y:"-100vh",

         }}
         animate={{
            y:0,
         }}
         className='bg-white text-gray-800 border-none rounded-md py-4 px-8 text-xl font-bold flex items-center cursor-pointer hover:text-gray-500'
         >
            Login with Google
            <FcGoogle className='ml-4 text-2xl' />
         </motion.button>
    </section>
  )
}

export default Login