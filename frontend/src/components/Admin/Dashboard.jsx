import React from 'react'
import {Link} from 'react-router-dom'
import Box from './Box'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from 'chart.js'
import Loader from '../Layout/Loader'



ChartJS.register(Tooltip,ArcElement,Legend)
const Dashboard = () => {
  const loading=false;
  const data ={
    labels: ["Preparing", "Shipped", "Delivered"],
  datasets:[
    {
      label:"no of orders",
  data:[2,3,4],
  backgroundColor:["rgba(159,63,176,0.1)", "rgba(78,63,176,0.2)", "rgba(156,0,60,0.3)"],
  border:["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
  borderWidth:1,
    }
  ]
  };

  return (
    <section className='bg-pink-500 w-full h-screen'>
      {
        loading===false ? <main className='h-full bg-white max-w-4xl m-auto'>
        <article className='bg-gray-900 p-8 flex justify-evenly items-center'>
          <Box title="Users" value={654} />
          <Box title="Orders" value={76} />
          <Box title="Income" value={98765} />
        </article>
        <section className='flex justify-between p-24'>
          <div className='flex flex-col w-1/2 justify-center items-center'>
            <Link className='bg-gray-900 whitespace-nowrap text-white p-4 w-1/2 text-center rounded-md m-4 hover:bg-pink-950' to="/admin/orders">View Orders</Link>
            <Link className='bg-gray-900 whitespace-nowrap text-white p-4 w-1/2 text-center rounded-md m-4 hover:bg-pink-950' to="/admin/users">View Users</Link>
          </div>
          <aside className='w-1/2'>
          <Doughnut data={data} />
          </aside>
        </section>
      </main> : <Loader />
      }
    </section>
  )
}

export default Dashboard