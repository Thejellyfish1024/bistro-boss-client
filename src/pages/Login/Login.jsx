import { useEffect, useRef, useState } from 'react';
import bgImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import GoogleSigning from '../shared/SocialSigning/GoogleSigning';


const Login = () => {

    const { signInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state || '/')
            })
            .catch(error =>{
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
    }

    const [disabled, setDisabled] = useState(true)

    const captchaRef = useRef()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <div className='w-screen min-h-screen flex items-center justify-center ' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='flex border border-gray-400 shadow-slate-400 shadow-xl rounded-md p-6 lg:p-16 flex-col-reverse md:flex-row justify-between items-center gap-24 max-w-7xl mx-auto'>
                <div className='flex-1'>
                    <img src={loginImg} className='w-[650px]' alt="" />
                </div>
                <div className='flex-1'>
                    <h2 className='text-4xl font-bold text-center'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <h4 className='text-xl font-semibold'>Email</h4>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder='Type here' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors.email && <span className='text-red-500'>Email is required</span>}
                        </div>
                        <div className='mt-4'>
                            <h4 className='text-xl font-semibold'>Password</h4>
                            <input type="password" {...register("password", { required: true })} name="password" placeholder='Enter your password' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                            {errors.password && <span className='text-red-500'>Password is required</span>}
                        </div>
                        <div className='mt-4'>
                            <LoadCanvasTemplate />
                            <input type="text" ref={captchaRef} placeholder='Enter your captcha' className='py-3 pl-4 w-3/4 border border-gray-300 mt-3 rounded-md' id="" />
                            <p className='btn btn-outline btn-md ml-2' onClick={handleValidate} >Validate</p>
                        </div>
                        <button disabled={disabled} className=' btn w-full btn-primary mt-8'>Sign In</button>
                    </form>
                    <p className='text-center font-semibold mt-3'>New here? <Link to='/register'><span className='text-red-500'>Register</span></Link></p>
                    <p className='text-center my-4'>Or sign up with</p>
                        <GoogleSigning></GoogleSigning>
                </div>
            </div>
        </div>
    );
};

export default Login;