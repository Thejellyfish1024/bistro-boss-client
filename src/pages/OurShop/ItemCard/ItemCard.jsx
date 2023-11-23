/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const ItemCard = ({ item }) => {
    const {_id ,name, image, recipe, price} = item;
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {refetch} = useCart()


    const handleAddToCart = () =>{

        if(user && user?.email){
            const newItem = {
                menuId : _id,
                name,
                image,
                price,
                email : user?.email,
                userName : user?.displayName
            }
            axiosSecure.post('/cart', newItem)
            .then(res=>{
                console.log(res.data);
                if(res?.data?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added to Cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please login first",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <div className="card h-[500px] bg-[#F3F3F3] shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 font-semibold mr-8 bg-[#111827] text-white px-4 py-1 rounded-md mt-3">${price}</p>
                <div className="flex flex-col space-y-3 mt-4 justify-center items-center p-6">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <button onClick={handleAddToCart} className="uppercase text-[#BB8506] text-lg border-b-4 hover:bg-[#111827] border-[#BB8506] rounded-lg px-4 py-2 font-semibold">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;