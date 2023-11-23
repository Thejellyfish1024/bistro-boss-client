import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()


    const {data, refetch} =  useQuery({
        queryKey:['cart', user?.email],
        queryFn: async () =>{
           const data = await axiosSecure.get(`/cart?email=${user?.email}`)
            return await data.data;
        }
    }) 

    return {data, refetch}
};

export default useCart;