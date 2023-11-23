import menuCover from '../../../assets/home/featured.jpg'
import Heading from '../../../components/Heading';

const MenuCover = () => {
    return (
        <div style={{ backgroundImage: `url(${menuCover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="md:h-[700px] bg-fixed my-16 rounded-md">
            <div className='w-full h-full rounded-md flex justify-center items-center ' style={{ background: 'linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%)' }}>
                <div className='text-white py-5 md:py-0'>
                    <Heading header={'FROM OUR MENU'} subHeader={'Check it out'}></Heading>
                    <div className='flex md:flex-row flex-col gap-5 w-3/4 mx-auto items-center'>
                        <img src={menuCover} className='md:w-1/2 rounded-lg' alt="" />
                        <div className='space-y-3'>
                            <h3 className='text-2xl font-medium'>
                                March 20, 2023
                            </h3>
                            <h3 className='text-2xl font-medium'>
                                WHERE CAN I GET SOME?
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <button className="uppercase mt-2 text-lg border-b-4 hover:bg-gray-700 border-white rounded-lg px-4 py-2 font-semibold">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuCover;