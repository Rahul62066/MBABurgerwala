import React from 'react'
import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from '../../assets/me.jpg'

const About = () => {
  return (
    <section className='w-full bg-pink-400'>
      <main className='bg-white max-w-4xl h-full m-auto'>
        <div className='text-3xl font-bold text-pink-900 px-8 py-4 uppercase bg-gray-950'>About Us</div>
        <article className='my-8'>
          <div className='text-2xl font-semibold uppercase text-center py-8'>MBA Burger Wala</div>
          <div className='p-8 tracking-wide w-1/2 text-center m-auto '>We are MBA Burger Wala. The place for most tasty burgers on the entire earth.</div>
          <div className='p-8 tracking-wide w-1/2 text-center m-auto '>Explore the various type of food and burgers. Click below to see the menu</div>
          <Link className='bg-gray-900 rounded-full flex items-center justify-center w-10 h-10 text-white text-2xl font-bold transition delay-100 m-auto hover:text-pink-950 hover:scale-110'>
            <RiFindReplaceLine />
          </Link>
        </article>


        <div className='bg-gray-900 p-8 text-white '>
          <div className='text-center uppercase'>Founder</div>
          <article className='flex items-center justify-center flex-wrap'>
            <div className='m-8'>
              <img className='w-40 h-40 rounded-full' src={me} alt="Founder" />
              <div className='m-4 text-center' >Lavkush Raj</div>
            </div>
            <div className='mx-4 w-1/2 tracking-wider leading-6 font-rubonto'>I am Lavkush Raj, the founder of MBA Burger Wala. Affiliated to Good Taste...</div>

          </article>

        </div>

      </main>
    </section>
  )
}

export default About