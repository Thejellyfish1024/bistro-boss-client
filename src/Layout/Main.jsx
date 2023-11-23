import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";



const Main = () => {

    // const location = useLocation()
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="max-w-screen-xl mx-auto bg-[#FFF]">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;