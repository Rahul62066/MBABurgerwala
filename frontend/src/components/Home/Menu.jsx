import React from 'react'
 import MenuCard from './MenuCard'
 import burger1 from '../../assets/burger1.png'
 import burger2 from '../../assets/burger2.png'
 import burger3 from '../../assets/burger3.png'
const Menu = () => {
  const addToCartHandler = (itemNum)=>{
   
  }
  return (
    
    <section id="menu" className='w-full h-screen bg-white p-16 font-bold font-serif'>
    <div className='text-4xl text-center p-8'>MENU</div>
    <div className='flex  gap-6   flex-wrap '>
     <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} delay={0.1} />
      <MenuCard itemNum={2} burgerSrc={burger2} price={500} title="Veg Cheese Burger" handler={addToCartHandler} delay={0.5}/>
      <MenuCard itemNum={3} burgerSrc={burger3} price={1800} title="Cheese Burger with french fries" handler={addToCartHandler} delay={0.8}/></div>
      
    
    </section>
  )
}

export default Menu