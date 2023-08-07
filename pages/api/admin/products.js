import { getSession } from 'next-auth/react'

import Product from '../../../models/product'

import db from '../../../utils/db'

async function handler(req, res) {
    const session = await getSession({ req })

    if (!session || (session && !session.user.isAdmin)) {
        return res.status(401).send('singin required')
    }

    await db.connect()

    const products = await Product.find()

    res.send(products)
}

export default handler
