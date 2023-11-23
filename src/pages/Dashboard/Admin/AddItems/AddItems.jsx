import { useForm } from "react-hook-form";
import Heading from "../../../../components/Heading";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        // console.log(res.data);
        if(res?.data?.success){
            const menuItem = {
                name : data.name,
                recipe: data.recipe,
                category : data.category,
                price : parseFloat(data.price),
                image : res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully added the item",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div>
            <Heading subHeader={"What's new?"} header={'ADD AN ITEM'}></Heading>

            <div className="w-3/4 bg-base-300 mx-auto p-12 rounded-md mb-16">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-5">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register("category",  { required: true })} className="select select-bordered">
                                <option disabled value='default'>Category</option>
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
                            <input type="text" {...register('price', { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-40" placeholder="Recipe Details"></textarea>
                    </div>
                    <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs block my-4" />

                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white hover:text-black"><span>Add Item</span> <FaUtensils></FaUtensils></button>

                </form>


            </div>
        </div>
    );
};

export default AddItems;