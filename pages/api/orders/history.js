import { getSession } from 'next-auth/react'

import db from '../../../utils/db'
import Order from '../../../models/order'

async function handler(req, res) {
  const session = await getSession({ req })

  const { user } = session

  await db.connect()

  const orders = await Order.find({ user: user._id })

  res.send(orders)
}

export default handler
