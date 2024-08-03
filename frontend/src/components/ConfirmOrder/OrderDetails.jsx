import React from 'react'

const OrderDetails = () => {
    return (
        <section className='bg-pink-500 w-full'>
            <main className='bg-white max-w-4xl m-auto p-8 overflow-x-auto'>
                <div className='uppercase flex justify-center flex-col items-center text-4xl font-bold m-12 tracking-wider'>Order Details</div>
                <div className='my-8 text-center '>
                    <div className='text-xl uppercase tracking-wide font-serif font-semibold'>Shipping</div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Address</div>
                        <div>{"manatu 825103 simaria"}</div>
                    </div>
                </div>

                <div className='my-8 text-center '>
                    <div className='text-xl uppercase tracking-wide font-serif font-semibold'>Contact</div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Name</div>
                        <div>{"Lavkush"}</div></div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Phone</div>
                        <div>{"+91 6206676494"}</div>
                    </div>
                </div>
                <div className='my-8 text-center '>
                    <div className='text-xl uppercase tracking-wide font-serif font-semibold'>Status</div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Order Status</div>
                        <div>{"Processing"}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Placed At</div>
                        <div>{"30-01-2024"}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Delivered At</div>
                        <div>{"15-02-2024"}</div>
                    </div>
                </div>
                <div className='my-8 text-center '>
                    <div className='text-xl uppercase tracking-wide font-serif font-semibold'>Payment</div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Payment Method</div>
                        <div>{"Online"}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Payment Reference</div>
                        <div>{"kjfhjfssfdgghsdfgg"}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Paid At</div>
                        <div>{"15-02-2024"}</div>
                    </div>
                </div>
                <div className='my-8 text-center '>
                    <div className='text-xl uppercase tracking-wide font-serif font-semibold'>Amount</div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Items Total</div>
                        <div>₹{56778}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Shipping Charges</div>
                        <div>₹{3445}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'>Tax</div>
                        <div>₹{234}</div>
                    </div>
                    <div className=' m-4'>
                        <div className='mr-1 font-semibold'> Total Amount</div>
                        <div>₹{56778+3445+234}</div>
                    </div>
                    
                </div>

                <article >
                    <div className='text-xl uppercase my-8 font-bold tracking-wider'>
                        Ordered Items
                    </div>
                    <div className='bg-[rgb(227,227,227)] m-4 flex items-center justify-between p-4 rounded-md'>
                        <div className='text-xl font-semibold'>Cheese Burger</div>
                        <div className=' font-semibold'>
                            <span>{12}</span> x <span>{434}</span>
                        </div>
                    </div>

                    <div className='bg-[rgb(227,227,227)] m-4 flex items-center justify-between p-4 rounded-md'>
                        <div className='text-xl font-semibold'>Veg Cheese Burger</div>
                        <div className=' font-semibold'>
                            <span>{10}</span> x <span>{200}</span>
                        </div>
                    </div>

                    <div className='bg-[rgb(227,227,227)] m-4 flex items-center justify-between p-4 rounded-md'>
                        <div className='text-xl font-semibold'> Cheese Burger with french fries</div>
                        <div className=' font-semibold'>
                            <span>{67}</span>X<span>{700}</span>
                        </div>
                    </div>

                    <div className='bg-[rgb(227,227,227)] m-4 flex items-center justify-between p-4 rounded-md'>
                        <div className='text-xl font-bold'>Sub Total</div>
                        <div className='text-xl font-bold'>₹{5323}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails