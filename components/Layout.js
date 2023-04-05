import Head from "next/head"
import Link from "next/link"


function Layout({ children, title }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/fav-icon.png" />
                <title>{`${title} - Shopping`}</title>
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-14 px-8 justify-between items-center bordr-b-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
                        <Link href="/">
                            <a className="text-lg font-bold ">
                                <img className="h-11 inline-flex" src="/fav-icon.png" />
                                Shopping
                            </a>
                        </Link>
                        <div>
                            <Link href="/cart">
                                <a className="px-2 py-1 m-1 border-solid border-2 border-white  rounded-lg font-semibold">
                                    Cart
                                </a>
                            </Link>
                            <Link href="/login">
                                <a className="px-2 py-1 m-1 border-solid border-2 border-white rounded-lg font-semibold ">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </nav>
                </header >
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <footer className="flex justify-center items-center h-10 bg-gradient-to-r  to-emerald-500 to-90% via-sky-500 via-30% from-indigo-500 from-10% text-white">Copyright © 2023 www.shopping.com . All Rights Reserved. - Legal notice - FAQ</footer>
            </div >
        </>
    )
}




export default Layout