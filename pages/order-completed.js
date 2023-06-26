import Link from 'next/link'

import Layout from '../components/Layout'

function OrderCompletedPage() {
  return (
    <Layout title='Order Completed'>
      <h2>Thanks for order.</h2>
      <Link href='/order-history'>View Order History</Link>
    </Layout>
  )
}

export default OrderCompletedPage
