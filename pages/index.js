import Layout from "../components/Layout"
import Product from "../components/Product"
import productItems from "../data/products.json"
import dynamic from "next/dynamic"

function Home() {
  return (
    <Layout title='Home Page'>
      <div className="grid gride-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
        {productItems.map((pItem) => (
          <Product item={pItem} key={pItem.slug}></Product>
        ))}
      </div>
    </Layout>
  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })