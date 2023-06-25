import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
import dynamic from 'next/dynamic';




import Layout from './../components/Layout';
import CheckoutWizard from './../components/CheckoutWizard';

function Placeorder() {
    const { state } = useContext(CartContext)
    const { cart } = state
    const { shippingData, paymentMethod, cartItems } = cart



    async function placeOrderHandler() {

        const totalPrice = cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)

        const response = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                orderItems: cartItems,
                shippingData,
                paymentMethod,
                totalPrice
            }),
            headers: { 'Content-Type': "application/json" },

        })

        const data = await response.json()
        console.log(data);

    }




    return (
        <Layout title="Place Order">
            <CheckoutWizard activeStep={3} />
            <h1 className='mb-1 text-xl'>Place Order</h1>
            <div className='grid md:grid-cols-4 md:gap-5'>
                <div className='overflow-x-auto md:col-span-3'>
                    <div className='p-5'>
                        <h2 className='text-lg w-full px-3 py-1 text-white  rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Shipping Data</h2>

                        <div className=' w-fit mt-3 mb-3 px-3 py-1 text-gray-700  text-xl rounded-xl bg-gray-300 '>
                            Name :
                            {shippingData.name} <br />
                            Address :
                            {shippingData.address} <br />
                            Post Code :
                            {shippingData.postalCode} <br />
                        </div>
                        <div className='w-20 px-3 py-1 text-white  text-xl rounded-xl bg-gray-400 text-center'>
                            <Link href="/shipping">Edit</Link>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h2 className='text-lg w-auto px-3 py-1 text-white  rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                            Payment Method
                        </h2>
                        <div className=' w-fit mt-3 mb-3 px-3 py-1 text-gray-700  text-xl rounded-xl bg-gray-300 '>
                            {paymentMethod}
                        </div>
                        <div className='w-20 px-3 py-1 text-white  text-xl rounded-xl bg-gray-400 text-center'>
                            <Link href="/payment">Edit</Link>
                        </div>
                    </div>
                    <div className='overflow-x-auto p-5'>
                        <div className='text-lg w-auto px-3 py-1 text-white  rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                            Order Items
                        </div>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-left'>Item</th>
                                    <th className='p-5 text-right'>Quantity</th>
                                    <th className='p-5 text-right'>Price</th>
                                    <th className='p-5 text-right'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item._id} className='border-b'>
                                        <td>
                                            <div className='flex items-center'>


                                                <Image className='rounded-xl' src={item.image} width={50} height={50} />
                                                &nbsp;
                                                {item.title}

                                            </div>

                                        </td>
                                        <td className='p-5 text-right'>{item.qty}</td>
                                        <td className='p-5 text-right'>{item.price}</td>
                                        <td className='p-5 text-right'>{item.qty * item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='w-20 px-3 py-1 text-white  text-xl rounded-xl bg-gray-400 text-center'>
                            <Link href="/cart">Edit</Link>
                        </div>

                    </div>
                </div>
                <div className='p-5'>
                    <h2 className='text-lg w-auto px-3 py-1 text-white  rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>Order Summery</h2>
                    <ul>
                        <li>
                            <div className=' flex justify-between  px-3  mt-3  py-1 text-gray-700  text-xl rounded-xl bg-gray-300 '>
                                <div>Total Price</div>
                                <div>
                                    {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
                                </div>
                            </div>
                        </li>
                        <li className='text-center'>
                            <button onClick={placeOrderHandler} className=' w-fitt text-center px-2 py-1 mt-5 text-white  text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                                Place Order
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}


export default dynamic(() => Promise.resolve(Placeorder), { ssr: false })