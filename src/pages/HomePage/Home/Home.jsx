import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroCover from "../BistroCover/BistroCover";
import CallUs from "../CallUs/CallUs";
import MenuCover from "../MenuCover/MenuCover";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroCover></BistroCover>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <MenuCover></MenuCover>
        </div>
    );
};

export default Home;