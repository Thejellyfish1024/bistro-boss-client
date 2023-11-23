/* eslint-disable react/prop-types */


const Heading = ({ header, subHeader }) => {
    return (
        <div className="my-12 text-center ">

            <h4 className="text-[#D99904] md:text-xl italic">---{subHeader}---</h4>
            <h2 className="md:text-4xl text-2xl font-semibold py-4 mx-auto mt-2 border-y-4 lg:w-1/3 w-1/2 uppercase">{header}</h2>

        </div>
    );
};

export default Heading;