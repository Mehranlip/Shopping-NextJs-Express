import dynamic from 'next/dynamic';
import Layout from './../components/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    function submitHandler({ email, password }) {

    }
    return (
        <Layout title="Login">
            <div className="w-full  mx-auto max-w-lg">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input {...register('email', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" autoFocus />
                        {errors.email && (
                            <div className='text-red-500'>Please enter email.</div>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input {...register('password', {
                            required: true, minLength: {
                                value: 5,
                                message: "Password mut be at least 5 chars."
                            }
                        })} className="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" />
                        {errors.password && (
                            <div className='text-red-500'>
                                {errors.password.message}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className=" px-2 py-1 text-white  text-xl rounded-xl bg-gradient-to-r  from-pink-600 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                            Log In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-gray-700-500 hover:text-blue-800" href="#">
                            <Link href="register">Register</Link>
                        </a>
                    </div>
                </form>

            </div>
        </Layout>
    )
}


export default dynamic(() => Promise.resolve(LoginPage), { ssr: false })