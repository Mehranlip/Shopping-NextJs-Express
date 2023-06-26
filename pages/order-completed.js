import Link from 'next/link'

import Layout from '../components/Layout'

function OrderCompletedPage() {
  return (
    <Layout title='Order Completed'>
      <h2 className='text-lg mb-5' >Thanks for order.</h2>
      <button className='w-fit px-2 py-1 text-white  text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <Link href='/order-history'>View Order History</Link>

      </button>
    </Layout>
  )
}

export default OrderCompletedPage
