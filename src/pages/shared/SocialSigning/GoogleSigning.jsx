import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const GoogleSigning = () => {

    const {googleSigning} = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const handleGoogle = () =>{
        googleSigning()
        .then(async (result) =>{
            console.log(result.user);
            await axiosSecure.post('/users', {name : result?.user?.displayName, email : result?.user?.email})
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })

        })
    }

    return (
        <div className="text-center ">
            <button onClick={handleGoogle} className="btn btn-outline rounded-full">
                <FcGoogle className="text-2xl"></FcGoogle>
            </button>
        </div>
    );
};

export default GoogleSigning;