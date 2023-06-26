import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  cat: { type: String, required: true },
  count: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
})

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
