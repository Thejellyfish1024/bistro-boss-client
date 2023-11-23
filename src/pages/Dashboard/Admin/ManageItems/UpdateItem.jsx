import { useForm } from "react-hook-form";
import Heading from "../../../../components/Heading";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const { register, handleSubmit } = useForm()
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const item = useLoaderData();
    console.log(item);

    const onSubmit = async (data) => {
        console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosSecure.patch(`/menu/${item?._id}`, data)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.modifiedCount > 0) {
                              Swal.fire({
                                title: "Updated!",
                                text: "Item has been updated.",
                                icon: "success"
                              });
                        }
                    })


            }
        });
    }

    return (
        <div>
            <Heading header={'UPDATE ITEM'}></Heading>

            <div className="w-3/4 bg-base-300 mx-auto p-12 rounded-md mb-16">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input defaultValue={item?.name} type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-5">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={item?.category} {...register("category", { required: true })} className="select select-bordered">
                                {/* <option disabled value='default'>Category</option> */}
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={item?.price} type="text" {...register('price', { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={item?.recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-40" placeholder="Recipe Details"></textarea>
                    </div>

                    <div className="text-center mt-6">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white hover:text-black">Update Recipe Details</button>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default UpdateItem;