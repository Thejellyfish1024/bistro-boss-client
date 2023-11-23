import Heading from "../../../components/Heading";
import useMenu from "../../../hooks/useMenu";
import CategoryBanner from "../../shared/CategoryBanner/CategoryBanner";
import CommonMenu from "../../shared/CommonMenu/CommonMenu";
import OurMenuBanner from "../OurMenuBanner/OurMenuBanner";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import { Helmet } from "react-helmet-async";



const OurMenu = () => {
    const {data:menu} = useMenu()
    // console.log(data);
    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className="mb-16">
             <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            <OurMenuBanner></OurMenuBanner>
            <div className="max-w-6xl mx-auto">
                <Heading header={"TODAY'S OFFER"} subHeader={"Don't miss"}></Heading>
                <CommonMenu data={offered} category={'salad'} btn={'ORDER YOUR FAVOURITE FOOD'}></CommonMenu>
            </div>
            {/* dessert */}
            <CategoryBanner category={'desserts'} img={dessertImg}></CategoryBanner>
            <div className="max-w-6xl mx-auto">
                <CommonMenu data={dessert} category={'desserts'} btn={'ORDER YOUR FAVOURITE FOOD'}></CommonMenu>
            </div>
            {/* pizza */}
            <CategoryBanner category={'pizzas'} img={pizzaImg}></CategoryBanner>
            <div className="max-w-6xl mx-auto">
                <CommonMenu data={pizza} category={'pizza'}  btn={'ORDER YOUR FAVOURITE FOOD'}></CommonMenu>
            </div>
            {/* salad */}
            <CategoryBanner category={'salads'} img={saladImg}></CategoryBanner>
            <div className="max-w-6xl mx-auto">
                <CommonMenu data={salad} category={'salad'} btn={'ORDER YOUR FAVOURITE FOOD'}></CommonMenu>
            </div>
            {/* soup */}
            <CategoryBanner category={'soups'} img={soupImg}></CategoryBanner>
            <div className="max-w-6xl mx-auto">
                <CommonMenu data={soup} category={'soups'} btn={'ORDER YOUR FAVOURITE FOOD'}></CommonMenu>
            </div>
        </div>
    );
};

export default OurMenu;