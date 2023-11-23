import Swal from "sweetalert2";
import Heading from "../../../../components/Heading";
// import useCart from "../../../../hooks/useCart";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useMenu from "../../../../hooks/useMenu";

const ManageItems = () => {

    const {data, refetch} = useMenu()

    // const { data, refetch } = useCart()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = id => {
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
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="">
            <Heading header={'MANAGE ALL ITEMS'} subHeader={'hurry up'}></Heading>
            <div className="p-10">
                <div className="bg-base-300 rounded-md p-10 ">
                    <h2 className="text-3xl font-bold mb-8">Total items: {data?.length}</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white">
                                    <tr>
                                        <th>

                                        </th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data?.map((item, index) => <tr key={item._id}>
                                            <th>
                                                <p>{index + 1}</p>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>${item.price}</td>
                                            <th>
                                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                                    <button className="btn hover:text-black  btn-ghost bg-[#D1A054] text-white"><FaRegEdit className="text-lg"></FaRegEdit></button>
                                                </Link>
                                            </th>
                                            <th>
                                                <button onClick={() => handleDeleteItem(item._id)} className="btn btn-ghost bg-[#B91C1C] hover:text-black text-white"><RiDeleteBinLine className="text-lg"></RiDeleteBinLine></button>
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

export default ManageItems;