import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5'
import { FiLogIn } from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Tip from '../UIcomponents/Tip'
const Header = ({ isAuthenticated = false }) => {
  return (
    <nav className='w-full bg-g h-20 p-6 flex justify-centre flex-col align-middle shadow-md bg-white '>
      <div className='w-full h-16 flex justify-centre  align-middle justify-between'>
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
        >
          <IoFastFoodOutline style={{
            width: '3rem',
            height: '3rem',
          }} />
        </motion.div>
        <div className='flex justify-end w-16 h-16'>
          <Link className='mr-7 text-xl font-semibold ' to='/'>Home</Link>
          <Link className='mr-7 text-xl font-semibold' to='/contact'>Contact</Link>
          <Link className='mr-7 text-xl font-semibold' to='/about'>About</Link>
          <Link className='mr-7 text-xl' to='/cart'>
            <Tip name="Cart" icon={<FaShoppingCart />} />
          </Link>
          <Link className='mr-7 text-xl' to={isAuthenticated ? "/profile" : "/login"}>
            {
              isAuthenticated ? <Tip name="Profile" icon={<FaUser />} /> : <Tip name="Login" icon={<FiLogIn />} />
            }
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header