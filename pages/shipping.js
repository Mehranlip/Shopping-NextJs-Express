import { useRouter } from 'next/router';
import Layout from './../components/Layout';
import dynamic from 'next/dynamic'
import CheckoutWizard from '../components/CheckoutWizard';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
import { useForm } from 'react-hook-form'


import Cookies from "js-cookie"



function Shipping() {
    const { state, dispatch } = useContext(CartContext)
    const router = useRouter()
    const { cart } = state
    const { shippingData } = cart
    const { handleSubmit, setValue, register } = useForm()



    useEffect(() => {
        setValue('name', shippingData.name)
        setValue('address', shippingData.address)
        setValue('postalCode', shippingData.postalCode)
    }, [setValue, shippingData.name, shippingData.address, shippingData.postalCode])
    function submitHandler({ name, address, postalCode }) {
        dispatch({
            type: "SAVE_SHIPPING-DATA",
            payload: {
                name, address, postalCode
            },
        })
        Cookies.set('cart', JSON.stringify({
            ...cart, shippingData: {
                name, address, postalCode,
            },
        })
        )
        router.push("/payment")
    }


    return <Layout title="Shipping">
        <CheckoutWizard activeStep={1} />
        <form className='mx-auto max-w-screen-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(submitHandler)}>
            <h2 className='mb-4 text-xl font-semibold'>Shipping</h2>
            <div className='mb-4'>
                <input {...register('name')} className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' id='name' placeholder='Name' autoFocus />
            </div>
            <div className='mb-4'>
                <input {...register('address')} className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' id='address' placeholder='Address' autoFocus />
            </div>
            <div className='mb-4'>
                <input {...register("postalCode")} className='shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' id='postalCode' placeholder='Postal Code' autoFocus />
            </div>
            <div className='mb-4'>
                <button className='px-2 py-1 text-white  text-xl rounded-xl w-28 bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                    Next
                </button>
            </div>
        </form>
    </Layout>
}


export default dynamic(() => Promise.resolve(Shipping), { ssr: false })
