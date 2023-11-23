import bgImg from '../../assets/others/authentication.png'
import loginImg from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import GoogleSigning from '../shared/SocialSigning/GoogleSigning';

const Register = () => {

    const axiosSecure = useAxiosSecure()

    const { createUser, updateUserProfile, logOut } = useAuth()

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.email)
                axiosSecure.post('/users', { name: data.name, email: data.email })
                    .then(res => {
                        console.log(res.data);
                        logOut()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate('/login')
                    })


            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
            })
    }

    return (
        <div>
            <div className='w-screen min-h-screen flex items-center justify-center ' style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='flex border border-gray-400 shadow-slate-400 shadow-xl rounded-md p-6 lg:p-16 flex-col-reverse md:flex-row-reverse justify-between items-center gap-24 max-w-7xl mx-auto'>
                    <div className='w-full'>
                        <img src={loginImg} className='w-[650px]' alt="" />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Name</h4>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder='Type here' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.name && <p className='text-red-500'>Name is required</p>}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Email</h4>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Type here' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.email && <p className='text-red-500'>Email is required</p>}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-xl font-semibold'>Password</h4>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} name="password" placeholder='Enter your password' className='py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md' id="" />
                                {errors.password?.type == 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type == 'minLength' && <p className='text-red-500 '>Minimum 6 character is required for password</p>}
                            </div>
                            <button className=' btn w-full btn-primary mt-8'>Sign Up</button>
                        </form>
                        <p className='text-center font-semibold mt-3'>Already registered?<Link to='/login'><span className='text-red-500'>Login</span></Link></p>

                        <p className='text-center my-4'>Or sign up with</p>
                        <GoogleSigning></GoogleSigning>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;