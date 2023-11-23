/* eslint-disable react/prop-types */


const CommonPageBanner = ({bannerImg, bannerTitle, description}) => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        className='w-full lg:h-[700px] md:h-[500px] h-[400px] md:p-28 p-16 pb-16 pt-20 '>
            <div className='bg-[#15151599] text-white h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                <h2 className='md:text-7xl text-4xl font-semibold'>{bannerTitle}</h2>
                <p className='w-3/4 text-center mt-4'>{description}</p>
            </div>
        </div>
    );
};

export default CommonPageBanner;