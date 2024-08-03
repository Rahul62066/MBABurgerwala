import React from 'react'

const Box = ({title,value}) => {
  return (
    <div className='bg-white rounded-full w-24 h-24 p-4'>
        <div className='text-center text-lg font-bold'>
            {title==="Income" && "₹"}
            {value}
        </div>
        <div className='text-center font-semibold'>{title}</div>
    </div>
  )
}

export default Box