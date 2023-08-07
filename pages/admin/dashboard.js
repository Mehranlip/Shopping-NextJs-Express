
import Link from 'next/link';
import Layout from './../../components/Layout';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


function DashboardPage() {
    const [adminData, setAdminData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/admin/summary')
            const data = await response.json()

            setAdminData(data)
            console.log(data);
        }
        fetchData()
    }, [])




    return (
        <Layout title="Admin Dashboard" >
            <div className='grid md:grid-cols-4 md:gap-4'>
                <div>
                    <ul>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md' >
                            <Link href="/admin/dashboard">
                                <a className='font-bold'>
                                    Dashborad
                                </a>
                            </Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md'  >
                            <Link href="/admin/orders">

                                Orders

                            </Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md' >
                            <Link href="/admin/products">
                                Producst
                            </Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md' >
                            <Link href="/admin/users">
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='md:col-span-3'>
                    <h2 className='mb-4 text-xl'>Admin Dashboard</h2>
                    <div>
                        {
                            adminData.map((item, index) => (
                                <div key={index} className='flex p-2'>
                                    <div className='m-5 p-5 bg-white rounded-xl text-center w-24'>
                                        <p className='text-3xl'>{item.ordersCount}</p>
                                        <p>Orders</p>
                                    </div>
                                    <div className='m-5 p-5 bg-white rounded-xl text-center w-24'>
                                        <p className='text-3xl'>{item.productsCount}</p>
                                        <p>Product</p>
                                    </div>
                                    <div className='m-5 p-5 bg-white rounded-xl text-center w-24'>
                                        <p className='text-3xl'>{item.usersCount}</p>
                                        <p>Users</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>

    )
}



DashboardPage.auth = { adminOnly: true }
export default dynamic(() => Promise.resolve(DashboardPage), { ssr: false })
