import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {

    const { user,loading, logOut } = useAuth();
    const { data } = useCart();
    const { isAdmin } = useAdmin()

    if (loading) {
        return <div className="mt-10 text-center"><progress className="progress w-56"></progress></div>
    }
    const navLinks = <>
        <NavLink to='/'><li><p>Home</p></li></NavLink>
        <NavLink to='/ourMenu'><li><p>Our Menu</p></li></NavLink>
        <NavLink to='/ourShop/salad'><li><p>Our Shop</p></li></NavLink>
        {
            user && isAdmin &&
            <NavLink to='/dashboard/adminHome'><li><p>Dashboard</p></li></NavLink>
        }

        {
            user && !isAdmin &&
            <>
                <NavLink to='/dashboard/userHome'><li><p>Dashboard</p></li></NavLink>
                <NavLink to='/dashboard/cart'><li><p className="text-orange-500"><FaCartShopping className="text-orange-500" size={24}></FaCartShopping>({data?.length})</p></li></NavLink>
            </>
        }
        {
            user ?
                <li onClick={() => logOut()}><p>Sign Out</p></li>
                :
                <NavLink to='/login'><li><p>Login</p></li></NavLink>
        }
    </>

    return (
        <div>
            <div className="navbar bg-[#15151580] max-w-screen-xl text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;