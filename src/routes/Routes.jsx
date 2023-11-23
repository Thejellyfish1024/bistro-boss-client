import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/Admin/AddItems/AddItems";
import UpdateItem from "../pages/Dashboard/Admin/ManageItems/UpdateItem";
import Cart from "../pages/Dashboard/UserPages/Cart/Cart";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import Payment from "../pages/Dashboard/UserPages/Payment/Payment";
import UserHome from "../pages/Dashboard/UserPages/UserHome/UserHome";
import PaymentHistory from "../pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourMenu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/ourShop/:category',
          element:<OurShop></OurShop>
        },
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[

        // admin routes
        {
          path:'/dashboard/adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'/dashboard/manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'/dashboard/allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'/dashboard/updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader : async ({params}) =>await fetch(`http://localhost:5000/menu/${params.id}`) 
        },

        // user routes

        {
          path: '/dashboard/userHome',
          element:<UserHome></UserHome>
        },
        {
          path: '/dashboard/cart',
          element:<Cart></Cart>
        },
        {
          path: '/dashboard/payment',
          element:<Payment></Payment>
        },
        {
          path: '/dashboard/paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
      ]
    }
  ]);
