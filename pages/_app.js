import '../styles/globals.css'

import { CartContextProvider } from '../context/Cart'
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className='bg-gray-100'>
      <SessionProvider session={session}>
        <CartContextProvider>
          {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </CartContextProvider>
      </SessionProvider>
    </div>
  )
}



function Auth({ children, adminOnly }) {
  const router = useRouter()

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized')
    },
  })

  if (status === 'loading') {
    return 'Loading'
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized')

  }

  return children
}

export default MyApp
