import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='min-h-80 bg-gray-900 p-10 flex justify-between flex-wrap  bottom-0 w-full'>
      <div className='flex flex-col items-center gap-1'>
        <div className='text-3xl font-bold text-pink-900 '>MBA Burger Wala</div>
        <div className=' text-xl font-semibold text-white'>We are trying to give you the best taste possible.</div>
        <em className='text-2xl text-white'>We give attention to genuine feedback.</em>
        <strong className='text-xl font-bold text-white'>All right received @mbaburgerwala</strong>
      </div>
      <aside className='flex flex-col items-center pr-10'>
        <div className='text-4xl font-bold text-white'>Follow Us</div>
        <Link className='text-5xl text-white hover:text-pink-900' to='https://youtube.com'><AiFillYoutube /></Link>
        <Link className='text-5xl text-white hover:text-pink-900' to='https://instagram.com'><AiFillInstagram /></Link>
        <Link className='text-5xl text-white hover:text-pink-900' to='https://linkedin.com'><AiFillLinkedin /></Link>
        <Link className='text-5xl text-white hover:text-pink-900' to='https://github.com'><AiFillGithub /></Link>
      </aside>

    </footer>
  )
}

export default Footer

