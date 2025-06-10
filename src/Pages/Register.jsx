import React, { use, useEffect, useState } from 'react';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router';
import lottieBg from '../assets/lotties/register.json'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';

const Register = () => {

    const { updateUser, createUser, setUser } = use(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        document.title = "Register";
    }, []);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log(name,email,photo,password);

        setErrorMsg('');

        if (!/.{6,}/.test(password)) {
            setErrorMsg("Password must be at least 6 characters long");
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setErrorMsg('Password must have at least one lowercase letter');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMsg('Password must have at least one uppercase letter');
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUser({ displayName: name, photoURL: photo })
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success("User Created Successfully");
                navigate(`${location.state ? location.state : '/'}`);
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
            });
    }

    return (
        <div>
            <div className='flex justify-center items-center flex-col lg:flex-row-reverse my-10 gap-3'>
                <div className="w-[300px] sm:w-[400px] md:w-[500px] h-auto">
                    <Lottie animationData={lottieBg} loop={true} />
                </div>
                <div className='bg-base-200 px-10 py-10 rounded-3xl'>
                    <div className='text-center mb-5 md:mb-8 lg:mb-10'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-3'>Create an Account</h2>
                        <p className='md:text-lg text-gray-500 font-medium'>Join Now to Explore the Rooms</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <label className="lable">Name</label> <br />
                        <input type="text" className="input w-11/12 rounded-xl mt-1 mb-2" required placeholder="Your Name" name='name' />
                        <br />
                        <label className="lable">Email</label> <br />
                        <input type="email" className="input w-11/12 rounded-xl mt-1 mb-2" required placeholder="Your Email" name='email' />
                        <br />
                        <label className="lable">Photo</label> <br />
                        <input type="text" className="input w-11/12 rounded-xl mt-1 mb-2" required placeholder="Your PhotoURL" name='photo' />
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
                        <input className='btn w-11/12 mt-5 bg-[#2ecc71] rounded-xl' type="submit" value="Register" />
                    </form>
                    <div>
                        <p className='mt-5 text-center'>Already have an account? <Link className='text-blue-600 ' to={'/login'}>Log In</Link></p>
                    </div>
                </div>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Register;