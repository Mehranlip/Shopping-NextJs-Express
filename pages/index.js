import { useContext } from "react"
import { toast } from "react-toastify"
import { CartContext } from "../context/Cart"


import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"

import db from '../utils/db'
import Product from "../models/product"


import dynamic from "next/dynamic"

function Home({ products }) {
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state

  function addToCartHandler(product) {
    const existingItem = cart.cartItems.find(
      (item) => item.slug === product.slug
    )

    const qty = existingItem ? existingItem.qty + 1 : 1

    dispatch({ type: 'ADD_ITEMS', payload: { ...product, qty } })

    toast.success('Product Added')

  }


  return (
    <Layout title='Home Page'>
      <div className="grid gride-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map((pItem) => (
          <ProductItem addToCart={addToCartHandler} item={pItem} key={pItem.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })


export async function getServerSideProps() {
  await db.connect()

  const products = await Product.find().lean()

  return {
    props: { products: products.map(db.convertToObj) },
  }
}
