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
        <div className="header">
            <div className="logo">
                <img className="image-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg" alt="logo image" />
            </div>
            <div className="navbar-links">
                <ul className="links">
                    <li >
                        home
                    </li>
                    <li>
                       <Link to={"/about"}>about us</Link>
                    </li> 
                    <li>
                        cart
                    </li>
                    <li onClick={handlelogin}>
                        {btnName}
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Navbar;