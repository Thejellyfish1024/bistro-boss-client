import coverImg from '../../../assets/home/chef-service.jpg'

const BistroCover = () => {
    return (
        <div style={{ backgroundImage: `url(${coverImg})`,backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} className='w-full md:h-[600px] my-16 md:p-28 p-16'>
            <div className='bg-[#FFF] h-full p-5 md:p-0 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-5xl'>Bistro Boss</h2>
                <p className='w-3/4 text-center mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default BistroCover;