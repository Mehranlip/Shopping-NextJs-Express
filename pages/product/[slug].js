import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext } from 'react';
import Layout from './../../components/Layout';
import productItem from "./../../data/products.json"
import { CartContext } from '../../context/Cart';

function ProductPage() {
    const { state, dispatch } = useContext(CartContext)
    const { query } = useRouter()
    const { slug } = query


    const product = productItem.find((pItem) => pItem.slug === slug)

    if (!product) {
        return <div>Product not found</div>
    }

    function addToCartHandler() {
        const existingItem = state.cart.cartItems.find(
            (itme) => itme.slug === product.slug
        )
        const qty = existingItem ? existingItem.qty + 1 : 1

        dispatch({ type: "ADD_ITEMS", payload: { ...product, qty } })
    }
    return (
        <Layout title={product.title}>
            <div className='grid   md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10 '>
                <div className='md:cols-span-2'>
                    <Image className='rounded-xl' src={product.image} width={350} height={350} layout='responsive' />
                </div>
                <div>
                    <div className='text-lg inline-flex justify-center items-center '>
                        <h2 className='font-bold'>{product.title}</h2>
                        <p className='text-white rounded-xl ml-2 px-2 py-1 bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>{product.cat}</p>
                    </div>
                    <p className='text-justify mt-3'>{product.description}</p>
                </div>
                <div className='p-5 '>
                    <div className='mb-2 flex justify-between bg-gray-200 rounded-xl p-5 '>
                        <div>
                            Price :
                        </div>
                        <div className='bg-white px-2 py-1 rounded-xl'>
                            {product.price}$
                        </div>
                    </div>
                    <div className='mb-2 flex justify-between bg-gray-200 rounded-xl p-5'>
                        <div>
                            Status:
                        </div>
                        <div>
                            {product.count > 0 ? <span className='bg-green-100 text-green-800  font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>Avalable</span> : <span className='bg-red-100 text-red-800 font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>UnAvalable</span>}
                        </div>
                    </div>
                    <button onClick={addToCartHandler} className='rounded-xl  text-white w-full px-4 py-2 bg-gradient-to-r  to-emerald-500 to-90% via-sky-500 via-30% from-indigo-500 from-10%'>Add to cart</button>
                </div>
            </div>
        </Layout>
    )
}


export default ProductPage