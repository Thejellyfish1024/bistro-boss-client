/* eslint-disable react/prop-types */


const SingleItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex md:items-center gap-5">
            <img src={image} className="w-28 h-28 rounded-b-[200px] rounded-r-[200px]" alt="" />
            <div className="text-[#737373]">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl">{name} ------------------</h4>
                    <p className="text-[#BB8506] text-xl">${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default SingleItem;