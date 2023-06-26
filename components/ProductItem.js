import Link from "next/link"

function ProductItem({ item, addToCart }) {
  return (
    <div className="bg-white rounded-xl mb-5 block shadow-lg shadow-slate-500-500/50">
      <Link href={`/product/${item.slug}`}>
        <a>
          <img src={item.image} className="rounded-t-xl" />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5 ">

        <Link href={`/product/${item.slug}`}>
          <a>
            <h2 className="text-lg font-semibold ">{item.title}</h2>
          </a>
        </Link>
        <div className="grid grid-cols-6 mt-7">
          <div className="col-start-1 col-end-3">
            <p className="p-2 bg-gray-100 rounded-xl ">{item.price}$</p>

          </div>
          <div className=" col-end-8 col-span-1">
            <button onClick={() => addToCart(item)} className="rounded-xl  text-white px-4 py-2 bg-gradient-to-r  to-emerald-500 to-90% via-sky-500 via-30% from-indigo-500 from-10%">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductItem