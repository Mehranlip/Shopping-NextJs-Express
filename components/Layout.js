import Head from "next/head"
import Link from "next/link"
import { Menu } from '@headlessui/react'
import DropDown from "./DropDown"


import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/Cart"


import { useSession, signOut } from "next-auth/react"
import Cookies from "js-cookie"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


function Layout({ children, title }) {
  const { status, data: session } = useSession()

  const { state, dispatch } = useContext(CartContext)
  const { cart } = state

  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.qty, 0))
  }, [cart.cartItems])

  function logoutHandler() {
    Cookies.remove()
    signOut({ callbackUrl: '/login' })
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fav-icon.png" />
        <title>{`${title} - Shopping`}</title>
      </Head>
      <ToastContainer position="top-right mt-6" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-14 px-8 justify-between items-center bordr-b-4 bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
            <Link href="/">
              <a className="text-lg font-bold ">
                <img className="h-12 mx-2 inline-flex" src="/main-fav-icon.png" />
                Shopping
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="px-2 py-1 m-1 border-solid border-2 border-white  rounded-lg font-semibold">
                  Cart

                  <span className='ml-1 rounded-xl bg-white text-emerald-500 px-2 py-1 text-xs font-bold'>
                    {cartItemsCount}
                  </span>

                </a>
              </Link>
              <Link href="/login">
                {status === "loading" ? (
                  "Loading"
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block ">

                    <Menu.Button className="px-2 py-1 m-1 border-solid border-2 border-white rounded-lg font-semibold">
                      {session.user.name}
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 bg-white rounded-xl p-4 origin-top-right border-slate-100">
                      <Menu.Item>
                        <DropDown className="flex p-2 text-black " href="/profile">
                          Profile
                        </DropDown >
                      </Menu.Item>
                      <Menu.Item>
                        <a className="flex p-2 text-black " href="#" onClick={logoutHandler}>
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                ) : (
                  <a className="px-2 py-1 m-1 border-solid border-2 border-white rounded-lg font-semibold ">
                    Login
                  </a>
                )}

              </Link>
            </div>
          </nav>
        </header >
        <main className="container m-auto mt-4 px-4">
          {children}
        </main>
        <footer className="text-center font-medium flex justify-center items-center h-10 bg-gradient-to-r  to-emerald-500 to-90% via-sky-500 via-30% from-indigo-500 from-10% text-white">
          <span className="">
            Copyright © 2023 www.shopping.com . All Rights Reserved. - Legal notice - FAQ
          </span>
        </footer>
      </div >
    </>
  )
}




export default Layout