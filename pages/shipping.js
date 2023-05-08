
import Layout from './../components/Layout';
import dynamic from 'next/dynamic'
import CheckoutWizard from '../components/CheckoutWizard';

function Shipping() {
    return <Layout title="Shipping">
        <CheckoutWizard activeStep={1} />
    </Layout>
}


export default dynamic(() => Promise.resolve(Shipping), { ssr: false })
