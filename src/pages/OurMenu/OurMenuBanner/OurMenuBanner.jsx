import menuBanner from '../../../assets/menu/banner3.jpg'
import CommonPageBanner from '../../shared/CommonPageBanner/CommonPageBanner';

const OurMenuBanner = () => {
    return (
      <CommonPageBanner bannerImg={menuBanner} bannerTitle={'OUR MENU'} description={'Would you like to try a dish?'}></CommonPageBanner>
    );
};

export default OurMenuBanner;