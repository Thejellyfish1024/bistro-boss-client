// import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../../../components/Heading";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useCart from "../../../../hooks/useCart";
// import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";


const Cart = () => {
    const {data, refetch} = useCart();
    const axiosPublic = useAxiosPublic()

    const totalPrice = data?.reduce((total, item) => total + item.price, 0)


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
                axiosPublic.delete(`/cart/${id}`)
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
            <Heading header={'WANNA ADD MORE?'} subHeader={'My Cart'}></Heading>
            <div className="p-10">
                <div className="bg-base-300 rounded-md p-10 ">
                    <div className="flex justify-between">
                    <h2 className="text-3xl font-bold mb-8">Total Items: {data?.length}</h2>
                    <h2 className="text-3xl font-bold mb-8">Total Price: ${totalPrice}</h2>
                    <Link to={`/dashboard/payment`}><button className="btn bg-[#D1A054] text-white hover:text-black">Pay</button></Link>
                    </div>
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

export default Cart;