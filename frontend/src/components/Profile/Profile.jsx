import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/me.jpg'
import { Link } from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
const Profile = () => {
    const options = {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
        }
    }
    return (
        <section className='bg-pink-600 w-full h-screen'>
            <main className='h-full bg-white m-auto  flex justify-center flex-col items-center p-16 '>
                <motion.img className='  h-60 w-60 rounded-full shadow-md m-16 ' src={me} alt='User' {...options} />
                <motion.div className='text-4xl font-bold' {...options} transition={{ delay: 0.3 }}>
                    Lavkush
                </motion.div>
                <motion.div className='m-8' {...options} transition={{ delay: 0.5 }}>
                    <Link className='bg-[rgb(40,40,40)] text-white px-6 py-3 text-xl rounded-xl hover:bg-pink-950 flex justify-center  items-center'to="/admin/dashboard">
                       <MdDashboard className='mr-2' /> Dashboard</Link>
                </motion.div>
                <motion.div
                    initial={{
                        x: "-100vw",
                        opacity: 1,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    
                    transition={{ delay: 0.5 }}
                    className='m-8'
                    >
                    <Link className='bg-pink-900 text-white px-6 py-3 text-xl rounded-xl hover:bg-pink-950' to="/myorders">Orders</Link>
                </motion.div>
                <motion.button
                    initial={{
                        x: "-100vw",
                        opacity: 1,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ delay: 0.3 }}
                    className='bg-gray-600 border-none outline-none px-6 py-3 rounded-xl cursor-pointer font-bold text-xl hover:bg-gray-500'
                >
                    Logout
                </motion.button>
            </main>
        </section>
    )
}

export default Profile