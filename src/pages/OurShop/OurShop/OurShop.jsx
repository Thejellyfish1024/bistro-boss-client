import CommonPageBanner from "../../shared/CommonPageBanner/CommonPageBanner";
import img from '../../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import CategoryCards from "../CategoryCards/CategoryCards";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams()
    const defaultCategory = categories.indexOf(category)
    // console.log(category);

    const [tabIndex, setTabIndex] = useState(defaultCategory)
    const {data:menu} = useMenu()
    // console.log(menu);
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Our Shop</title>
            </Helmet>
            <CommonPageBanner bannerImg={img} bannerTitle={'OUR SHOP'} description={'Would you like to try a dish?'}></CommonPageBanner>
            <div className="text-center my-12">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        {/* react-tabs__tab--selected */}
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <CategoryCards category={salad}></CategoryCards>
                    </TabPanel>
                    <TabPanel>
                        <CategoryCards category={pizza}></CategoryCards>
                    </TabPanel>
                    <TabPanel>
                        <CategoryCards category={soup}></CategoryCards>
                    </TabPanel>
                    <TabPanel>
                        <CategoryCards category={dessert}></CategoryCards>
                    </TabPanel>
                    <TabPanel>
                        <CategoryCards category={drinks}></CategoryCards>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;