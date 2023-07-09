
import Link from 'next/link';
import Layout from './../../components/Layout';
import dynamic from 'next/dynamic';


function DashboardPage() {
    return (
        <Layout title="Admin Dashboard" >
            <div className='grid md:grid-cols-4 md:gap-4'>
                <div>
                    <ul>
                        <li>
                            <Link href="/admin/dashboard">
                                <a className='font-bold'>
                                    Dashborad
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/orders">

                                Orders

                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/products">
                                Producst
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/users">
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='md:col-span-3'>
                    <h2 className='mb-4 text-xl'>Admin Dashboard</h2>
                </div>
            </div>
        </Layout>

    )
}



DashboardPage.auth = { adminOnly: true }
export default dynamic(() => Promise.resolve(DashboardPage), { ssr: false })
