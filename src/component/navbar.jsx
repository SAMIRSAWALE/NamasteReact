import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [btnName , setbtnName] = useState("login");
    console.log("Component Rerender's");

    //types of use effect working
        //  with out dependecny array
        // with dependency arrya
        useEffect(() => {
                console.log(
                    "use effect is loaded "
                );
        })
        // empty dependency arrya
        useEffect(() => {
                console.log(
                    "use effect is loaded "
                );
        })
        

    const handlelogin = ()=>{
        if(btnName == "login")
        {
            setbtnName("logout");
        }
        else
        {
            setbtnName("login");
        }
    } 
    // console.log("Header component rendered pleaes");

    return (
        <div className="flex justify-between bg-orange-200 shadow-lg mb-12">
            <div className="logo">
                <img className="image-logo bg-black w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="logo image" />
            </div>
            <div className="navbar-links">
                <ul className="flex mt-5">
                    <li className="m-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="m-4">
                       <Link to={"/about"}>about us</Link>
                    </li> 
                    <li className="m-4">
                        cart
                    </li>
                    <li className="m-4" onClick={handlelogin}>
                        {btnName}
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Navbar;