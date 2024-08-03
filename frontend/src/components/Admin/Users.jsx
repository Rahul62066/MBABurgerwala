import React from 'react'
import me from '../../assets/me.jpg'
const Users = () => {
    const array = [1,2,3,4,5,6,7,8,9,10]
    return (
        <section className='w-full h-screen bg-pink-700'>
            <main className='max-w-4xl bg-white m-auto h-full p-8 overflow-x-auto '>
                <table className='w-full text-center  ' >
                    <thead>
                        <tr className='bg-gray-400 '>
                            <th className='bg-gray-950 text-white rounded-tl-md p-3'>User Id</th>
                            <th className='bg-gray-950 text-white p-3'>Name</th>
                            <th className='bg-gray-950 text-white p-3 '>Photo</th>
                            <th className='bg-gray-950 text-white p-3'>Role</th>
                            <th className='bg-gray-950 text-white p-3'>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((i) => (
                            <tr key={i}>
                                <td className='text-slate-900 bg-gray-300 font-bold p-1'>#sksdfjgksjk</td>
                                <td className='text-slate-900 bg-gray-300 font-bold p-1'>Lavkush</td>
                                <td className='text-slate-900 bg-gray-300 font-bold p-1 flex justify-center flex-col items-center'>
                                    <img className='w-10 h-10 rounded-full' src={me} alt="User" />
                                </td>
                                <td className='text-slate-900 bg-gray-300 font-bold p-1'>Admin</td>
                                <td className='text-slate-900 bg-gray-300 font-bold p-1'>{"30-01-2024"}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Users