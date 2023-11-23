/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";


const CommonMenu = ({ data, btn, category }) => {
    // console.log('common menu', data);

    if (!data) {
        <div className="text-4xl font-bold my-10 text-center">Loading...</div>
    }

    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-0 gap-8">
                {
                    data?.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to={`/ourShop/${category}`}><button className="uppercase text-lg border-b-4 hover:bg-base-300 border-black rounded-lg px-4 py-2 font-semibold">{btn}</button></Link>
            </div>
        </div>
    );
};

export default CommonMenu;