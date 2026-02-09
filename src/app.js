
import ReactDOM from "react-dom/client"
import Body from "./component/body";
import Navbar from "./component/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/about";
import ContactUs from "./component/contactus";
import ErrorPage from "./component/errorpage";
import RestroMenu from "./component/restroMenu";

const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
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
            }
        ]
    },

])
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<RouterProvider router={routing} />);