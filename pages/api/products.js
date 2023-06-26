import db from '../../utils/db'
import products from '../../data/products'
import Product from '../../models/product'

async function handler(req, res) {
  await db.connect()

  await Product.deleteMany()

  await Product.insertMany(products)

  res.send({ message: 'products added.' })
}

export default handler
