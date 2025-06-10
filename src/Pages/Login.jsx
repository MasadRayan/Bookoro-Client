import React, { use, useEffect, useState } from 'react';
import lottieBg from '../assets/lotties/register.json'
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';


const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const { setUser, loginUser, signInwithGoogle } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        document.title = "Login";
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMsg('');

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                toast.success("Logged In Successfully");
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
            });

    }

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                toast.success("Logged In Successfully");
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
            });
    }



    return (
        <div>
            <div className='flex justify-center my-10 items-center flex-col lg:flex-row-reverse gap-3'>
                <div className="w-[300px] sm:w-[400px] md:w-[500px] h-auto">
                    <Lottie animationData={lottieBg} loop={true} />
                </div>
                <div className='bg-base-200 px-10 py-10 rounded-3xl' >
                    <div className='text-center mb-5 md:mb-8 lg:mb-10'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-3'>Welcome Back.</h2>
                        <p className='md:text-lg text-gray-500 font-medium'>Enter your email and <br /> password to access your account</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <label className="lable">Email</label> <br />
                        <input type="email" className="input w-11/12 rounded-xl mt-1 mb-2" required placeholder="Your Email" name='email' />
                        <br />
                        <label className="lable">Password</label> <br />
                        <div className='relative'>
                            <input
                                type={showPass ? 'text' : "password"}
                                className="input w-11/12 rounded-xl mt-1 mb-2"
                                required
                                placeholder="Your password"
                                name='password' />
                            <button onClick={() => setShowPass(!showPass)} type='button' className='btn btn-ghost btn-xs absolute top-3 right-7 md:right-11'>
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>
                        <br />
                        {
                            errorMsg && <span className='text-xs font-semibold text-red-500'>{errorMsg}</span>
                        }
                        <input className='btn w-11/12 mt-5 bg-[#2ecc71] rounded-xl' type="submit" value="Login" />
                    </form>
                    <div className='flex justify-center items-center mt-5 text-center gap-2'>
                        <hr className='w-16 md:w-20 lg:w-26' />
                        <p>Or Login With</p>
                        <hr className='w-16 md:w-20 lg:w-26' />
                    </div>
                    <div className='flex justify-center items-center flex-col md:flex-row-reverse mt-5 gap-3'>

                        {/* Google */}
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                    <div className='text-center'>
                        <p className='mt-5'>New to this website? <Link className='text-blue-600 ' to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Login;