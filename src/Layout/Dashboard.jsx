import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const { isAdmin, isAdminLoading } = useAdmin()

    if (isAdminLoading) {
        return <div className="mt-10 text-center"><progress className="progress w-56"></progress></div>
    }

    return (
        <div className="flex gap-10 min-h-screen">
            <div className="bg-[#D1A054] pt-10 px-8">
                <div>
                    <h3 className="text-2xl font-bold italic">BISTRO BOSS</h3>
                    <h5 className="italic text-lg font-semibold uppercase">R e s t a u r a n t</h5>
                </div>
                {/* admin */}

                {
                    isAdmin ?

                        // admin routes

                        <ul className="mt-8 space-y-4">
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='adminHome'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">Admin Home</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='addItems'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">add items</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='manageItems'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">manage items</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='manageBookings'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">Manage bookings</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='allUsers'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">All users</li>
                            </NavLink>
                        </ul>
                        :

                        // user routes 

                        <ul className="mt-8 space-y-4">
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='userHome'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">User Home</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='reservation'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">Reservation</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='paymentHistory'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">Payment history</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='cart'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">My cart</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='addReview'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">add review</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='myBooking'>
                                <AiFillHome size={20}></AiFillHome>
                                <li className="font-bold uppercase">my booking</li>
                            </NavLink>

                        </ul>
                }
                <div className="divider"></div>
                {/* shared */}
                <div>
                    <ul className=" space-y-4">
                        <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='/'>
                            <AiFillHome size={20}></AiFillHome>
                            <li className="font-bold uppercase">Home</li>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='menu'>
                            <AiFillHome size={20}></AiFillHome>
                            <li className="font-bold uppercase">Menu</li>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='shop'>
                            <AiFillHome size={20}></AiFillHome>
                            <li className="font-bold uppercase">Shop</li>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"} to='contact'>
                            <AiFillHome size={20}></AiFillHome>
                            <li className="font-bold uppercase">Contact</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;