import Link from 'next/link';
import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import Image from 'next/image'


function users() {
    const [adminUsers, setAdminUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/admin/users')
            const data = await response.json()

            setAdminUsers(data)
            console.log(data);
        }

        fetchData()
    }, [])


    return (
        <Layout title='Admin Orders'>
            <div className='grid md:grid-cols-4 md:gap-5'>
                <div>
                    <ul>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md'>
                            <Link href='/admin/dashboard'>
                                <a className='font-bold'>Dashboard</a>
                            </Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md'>
                            <Link href='/admin/orders'>Orders</Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md'>
                            <Link href='/admin/products'>Products</Link>
                        </li>
                        <li className='w-1/2 p-2 m-2 bg-white rounded-md'>
                            <Link href='/admin/users'>Users</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:col-span-3'>
                    <h2 className='mb-4 text-xl'>Admin Users</h2>
                    {adminUsers.map((item, index) => (
                        <div key={index} className='flex items-center'>
                            <div className='bg-white m-2 p-2 rounded-md'>
                                <p className='text-lg'>usersname: {item.name}</p>
                                <p className='text-lg'>email: {item.email}</p>
                                <p className='text-lg'>user rol: {item.isAdmin ? `Admin` : `Normal user`}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}


export default users