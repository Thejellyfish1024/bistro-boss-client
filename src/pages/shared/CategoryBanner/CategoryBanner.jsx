/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';


const CategoryBanner = ({ category, img }) => {
    return (

        <div className='my-16'>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div
                    className='w-full lg:h-[600px] md:p-36 p-20  '>
                    <div className='bg-[#15151599] text-white h-full p-5 md:p-8 lg:p-0 rounded-md flex flex-col justify-center items-center'>
                        <h2 className='md:text-5xl text-3xl font-semibold uppercase'>{category}</h2>
                        <p className='lg:w-3/4 text-center mt-4'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </Parallax>
        </div>

    );
};

export default CategoryBanner;