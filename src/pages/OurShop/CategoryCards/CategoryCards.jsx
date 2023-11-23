/* eslint-disable react/prop-types */
import ItemCard from "../ItemCard/ItemCard";


const CategoryCards = ({ category }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 lg:p-0 gap-10">
            {
                category.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
            }
        </div>
    );
};

export default CategoryCards;