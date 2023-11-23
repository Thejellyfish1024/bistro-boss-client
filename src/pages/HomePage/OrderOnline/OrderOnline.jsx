import Heading from "../../../components/Heading";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'


const OrderOnline = () => {
    return (
        <div className="mt-8 mb-16">
            <Heading
                header={'ORDER ONLINE'}
                subHeader={'From 11:00am to 10:00pm'}
            ></Heading>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=" md:h-[450px]">
                            <img src={img1} className="rounded-md" alt="" />
                            <h4 className="text-3xl -mt-16 text-[#FFFFFF] font-medium uppercase  text-center md:w-[270px]">Salads</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" md:h-[450px]">
                            <img src={img2} alt="" />
                            <h4 className="text-3xl -mt-16 text-[#FFFFFF] font-medium uppercase bg-red-500 text-center md:w-[270px]">pizzas</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" md:h-[450px]">
                            <img src={img3} alt="" />
                            <h4 className="text-3xl -mt-16 text-[#FFFFFF] font-medium uppercase bg-red-500 text-center md:w-[270px]">Soups</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" md:h-[450px]">
                            <img src={img4} alt="" />
                            <h4 className="text-3xl -mt-16 text-[#FFFFFF] font-medium uppercase bg-red-500 text-center md:w-[270px]">desserts</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" md:h-[450px]">
                            <img src={img5} alt="" />
                            <h4 className="text-3xl -mt-16 text-[#FFFFFF] font-medium uppercase bg-red-500 text-center md:w-[270px]">Salads</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;