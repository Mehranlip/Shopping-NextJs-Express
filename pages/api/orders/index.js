import { getSession } from 'next-auth/react'

import db from '../../../utils/db'
import Order from '../../../models/order'

async function handler(req, res) {
    const session = await getSession({ req })

    if (!session) {
        return res.send('Sing in required')
    }

    const { user } = session

    await db.connect()

    const newOrder = new Order({
        ...req.body,
        user: user._id,
    })

    const order = await newOrder.save()

    res.status(201).send(order)
}

export default handler
