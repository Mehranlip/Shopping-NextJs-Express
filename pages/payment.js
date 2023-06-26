
import Layout from './../components/Layout';
import CheckoutWizard from './../components/CheckoutWizard';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { CartContext } from '../context/Cart';
import Cookies from 'js-cookie';


function PaymentPage() {
  const { state, dispatch } = useContext(CartContext)

  const { cart } = state
  const { paymentMethod } = cart

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()

    if (!selectedPaymentMethod) {
      alert('Please Select Payment Method')
    }

    dispatch({ type: ' SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    )

    router.push('/placeorder')
  }

  const methods = ['Gateway', 'Offline Payment']


  return (
    <Layout title="Payment">
      <CheckoutWizard activeStep={2} />
      <form onSubmit={submitHandler} className='mx-auto max-w-screen-md bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4'>
        <h2 className='mb-4 text-xl'>Payment Method</h2>
        {methods.map((item) => (
          <div key={item} className='mb-4'>
            <input
              name='paymentMethod'
              className='p-2 outline-none focus:ring-0'
              id={item}
              type='radio'
              checked={selectedPaymentMethod === item}
              onChange={() => setSelectedPaymentMethod(item)}

            />
            <label className='p-2' htmlFor={item}>
              {item}
            </label>

          </div>
        ))}
        <div className='mb-4 flex justify-between'>
          <button onClick={() => router.push('/shipping')} type='button' className=' w-28 px-3 py-1 text-white  text-xl rounded-xl bg-gray-400 '>
            Back
          </button>
          <button className=' w-28 px-3 py-1 text-white  text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            Next
          </button>
        </div>
      </form>
    </Layout>
  )
}




export default dynamic(() => Promise.resolve(PaymentPage), { ssr: false })
