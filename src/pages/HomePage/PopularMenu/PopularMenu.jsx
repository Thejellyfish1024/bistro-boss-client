import Heading from "../../../components/Heading";
import useMenu from "../../../hooks/useMenu";
import CommonMenu from "../../shared/CommonMenu/CommonMenu";


const PopularMenu = () => {
    const {data : menu} = useMenu()
    const popular = menu?.filter(item => item?.category === 'popular')

    // console.log(popular);
    return (
        <div className="my-16">
            <Heading header={'FROM OUR MENU'} subHeader={'Check it out'}></Heading>
            <CommonMenu data={popular} btn={'View Full  Menu'}></CommonMenu>
        </div>
    );
};

export default PopularMenu;