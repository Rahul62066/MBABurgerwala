import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink } from 'react-router-hash-link'
import image from '../../assets/bg.png'
import {motion} from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'
const Home = () => {
  return (
   <>
   
   <section className='home w-[100vw] h-screen ' 
   
   >
    <div className='pl-32 pt-60 flex flex-col space-y-1'>
      <motion.div className='text-6xl uppercase  font-bold'
      initial={{
        x:"-100%",
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1,
      }}
      >
        MBA Burger Wala</motion.div>
      <motion.div className='text-xl '
           initial={{
            x:"-100%",
            opacity:0,
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          transition={{
            delay:0.4,
          }}
      >
        Give yourself a tasty burger.</motion.div>
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
          delay:0.3,
        }}
        >
        <HashLink className=' w-40 bg-pink-900 text-white  rounded p-1 block ' to={'./#menu'}
      >Explore Menu</HashLink>
        </motion.div>
      
    </div>
    
   </section>
   <Founder />
   <Menu />
   </>
  )
}

export default Home