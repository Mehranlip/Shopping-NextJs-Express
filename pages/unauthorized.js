import Layout from "../components/Layout"


function Unauthorized() {
    return (
        <Layout title="Access Denied">
            <h2 className="mb-4 text-white px-2 py-1 text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Access Denied</h2>
        </Layout>
    )
}

export default Unauthorized