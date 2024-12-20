import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import { About } from "../pages/About";
import Contact from "../pages/Contact";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";
import SellerRoute from "./private/SellerRoute";
import BuyerRoute from "./private/BuyerRoute";
import MyWishList from "../pages/buyer/MyWishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products", 
        element: <Products/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact-us",
        element: <Contact/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
  {
    path : "/dashboard",
    element : <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children : [
      {
        path:"/dashboard/overview",
        element : <Overview/>
      },

      //buyer route
      {
        path:"/dashboard/wishlist",
        element : <BuyerRoute><MyWishList/></BuyerRoute>
      },

      //seller routes
      {
        path:"/dashboard/my-products",
        element : <SellerRoute><MyProducts/></SellerRoute>
      },
      {
        path:"/dashboard/add-products",
        element : <SellerRoute><AddProducts/></SellerRoute>
      },
    ]
  }
]);
