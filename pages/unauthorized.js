import Layout from '../components/Layout'

function Unauthorized() {
  return (
    <Layout title='Access Denied'>
      <h2 className='text-xl'>Access Denied</h2>
    </Layout>
  )
}

export default Unauthorized