import React from 'react'

const increment = (Item)=> {
    return (Item);
};
const decrement = (Item)=> {
return(value=value+1);
};
const CardItem = ({value,title,img,increment,decrement}) => {
  return (
    <div className=' m-4 bg-gray-400 flex items-center justify-between p-4 rounded-md '>
    <div className='flex items-center'>
      <div className='text-2xl font-bold'>{title}</div>
      <img className='h-14' src={img} alt="Item" />

    </div>
    <div>
      <button className='  cursor-pointer  border border-gray-900 p-2 bg-gray-700 rounded-md' onClick={decrement}>-</button>
      <input className='text-centre w-16 h-8 p-2 border-none m-1 outline-none rounded-md text-pink-900' type="number" readOnly value={value} />
      <button className='  cursor-pointer  border border-gray-900 p-2 bg-gray-700 rounded-md' onClick={increment}>+</button>
    </div>
  </div>
  )
}

export default CardItem