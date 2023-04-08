import { useContext } from 'react';
import Layout from './../components/Layout';
import dynamic from 'next/dynamic';
import { CartContext } from '../context/Cart';
import Image from 'next/image';
import { useRouter } from 'next/router';

function CartPage() {

    const router = useRouter()

    const { state, dispatch } = useContext(CartContext)

    const {
        cart: { cartItems },
    } = state

    function removeItemHandler(item) {
        dispatch({ type: "REMOVE_ITEM", payload: item })
    }

    return (
        <Layout title="Shopping Cart">
            <span className='mb-4 text-white px-2 py-1 text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'> Shopping Cart</span>
            {
                cartItems.length === 0 ? (<div>Cart is empty.</div>) : (
                    <div className='grid md:grid-cols-4 md:gap-5'>
                        <div className='overflow-x-auto md:col-span-3 '>
                            <table className='min-w-full'>
                                <thead className='border-b'>
                                    <tr>
                                        <th className='px-5 text-left'>
                                            Item
                                        </th>
                                        <th className='p-5 text-right'>
                                            Quantity
                                        </th>
                                        <th className='p-5 text-right'>
                                            Price
                                        </th>
                                        <th className='p-5 '>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.slug} className='border-b'>
                                            <td>
                                                <span className='flex items-center'>
                                                    <Image className='rounded-xl ' src={item.image} width={60} height={60} />
                                                    <span className='ml-3 font-semibold'>
                                                        {item.title}

                                                    </span>
                                                </span>
                                            </td>
                                            <td className='p-5 text-right'>{item.qty}</td>
                                            <td className='p-5 text-right'>{item.price}$</td>
                                            <td className='p-5 text-center'>
                                                <button onClick={() => removeItemHandler(item)} className='bg-red-100 text-red-800 font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='p-5 text-center items-center justify-center '>
                            <div className='p-5  text-white  text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                                Total price : {" "}
                                <span className='bg-gray-100 text-black rounded-xl px-2 py-1 '>{cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}</span>
                                <br />
                                <button onClick={() => router.push("/checkout")} className='bg-white text-black px-2 py-1 mt-5 rounded-xl '>Checkout  </button>

                            </div>

                        </div>

                    </div>
                )
            }
        </Layout >
    )
}


export default dynamic(() => Promise.resolve(CartPage), { ssr: false })