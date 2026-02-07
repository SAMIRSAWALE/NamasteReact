import { useState } from "react";

const Header = () => {
    const [logout , useLogout] = useState("logout");

    const handlelogin = ()=>{
        useLogout("login");
    } 

    return (
        <div className="header">
            <div className="logo">
                <img className="image-logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg" alt="logo image" />
            </div>
            <div className="navbar-links">
                <ul className="links">
                    <li>
                        home
                    </li>
                    <li>
                        about uskkk
                    </li>
                    <li>
                        cart
                    </li>
                    <li onClick={handlelogin}>
                        {logout == "logout" ? "logout" : "login"}
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default Header;