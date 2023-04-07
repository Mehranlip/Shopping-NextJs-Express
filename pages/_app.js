import '../styles/globals.css'
import { CartContextProvider } from '../context/Cart'

function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-100 '>
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  </div>
}

export default MyApp
