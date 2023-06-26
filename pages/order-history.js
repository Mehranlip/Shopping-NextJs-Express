import { useEffect, useState } from 'react'

import Layout from '../components/Layout'

function OrderHistoryPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch('api/orders/history')

      const data = await response.json()

      setOrders(data)

    }

    fetchOrders()
  }, [])



  return (
    <Layout title='Order History'>
      <h2 className='text-lg'>Order History</h2>
      <div>
        <div className='flex p-2'>
          <div>Ordr ID</div>
        </div>
        {orders.map((item) => (
          <div key={item._id} className='flex p-2'>
            <div className=' text-lg w-fit px-3 py-1 text-white  rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>{item._id}</div>
            <div className='ml-5 text-lg w-fit px-3 py-1 text-white  rounded-xl bg-gray-600'>{item.totalPrice}$</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default OrderHistoryPage
