import { useQuery } from "@tanstack/react-query";
import Heading from "../../../../components/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/users`)
            return await data.data;
        }
    })

    const handleDeleteIUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data) {
                            refetch();
                            Swal.fire({
                                title: "Updated!",
                                text: "User has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="">
            <Heading header={'MANAGE ALL userS'} subHeader={'How many'}></Heading>
            <div className="p-10">
                <div className="bg-base-300 rounded-md p-10 ">
                    <h2 className="text-3xl font-bold mb-8">Total users: {data?.length}</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white">
                                    <tr>
                                        <th>

                                        </th>
                                        <th> NAME</th>
                                        <th>EMAIL</th>
                                        <th>ROLE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data?.map((user, index) => <tr key={user._id}>
                                            <th>
                                                <p>{index + 1}</p>
                                            </th>
                                            <td>
                                                <p>{user.name}</p>
                                            </td>
                                            <td>{user.email}</td>
                                            <th>
                                                {
                                                    user?.role === 'admin' ?
                                                        <p>Admin</p>
                                                        :
                                                        <button onClick={() => handleMakeAdmin(user)} className="btn hover:text-black  btn-ghost bg-[#D1A054] text-white"><FaUsers className="text-lg"></FaUsers></button>
                                                }
                                            </th>
                                            <th>
                                                <button onClick={() => handleDeleteIUser(user._id)} className="btn btn-ghost bg-[#B91C1C] hover:text-black text-white"><RiDeleteBinLine className="text-lg"></RiDeleteBinLine></button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;