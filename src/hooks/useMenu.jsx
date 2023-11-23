
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {

    const axiosPublic = useAxiosPublic()

    const {data, refetch} = useQuery({
        queryKey: ['menuItems'],
        queryFn: async () =>{
           const data = await axiosPublic.get('/menu')
           return await data.data;
        }
    })
    // console.log('use menu data',data);

    return {data, refetch};
};

export default useMenu;