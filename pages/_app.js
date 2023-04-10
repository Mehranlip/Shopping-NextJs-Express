import '../styles/globals.css'
import { CartContextProvider } from '../context/Cart'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <div className='bg-gray-100 '>
    <SessionProvider session={pageProps.session}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SessionProvider>
  </div>
}

export default MyApp
