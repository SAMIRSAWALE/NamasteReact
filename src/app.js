
import ReactDOM from "react-dom/client"
import React from "react";
import Body from "./component/body";
import Navbar from "./component/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/about";
import ContactUs from "./component/contactus";
import ErrorPage from "./component/errorpage";
import RestroMenu from "./component/restroMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/cart";

const AppLayout = () => {
    return (
        <div>
            <Provider store={appStore}>
                <Navbar />
                <Outlet />
            </Provider>

        </div>
    )
};
const routing = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/resturant/:id",
                element: <RestroMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

])
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<RouterProvider router={routing} />);