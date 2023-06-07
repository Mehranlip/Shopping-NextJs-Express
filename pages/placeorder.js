import React from 'react'
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

import Layout from './../components/Layout';
import CheckoutWizard from './../components/CheckoutWizard';

function Placeorder() {
    const { state } = useContext(CartContext)
    const { cart } = state
    const { shippingData, paymentMethod } = cart


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
                </div>
            </div>
        </Layout>
    )
}

export default Placeorder