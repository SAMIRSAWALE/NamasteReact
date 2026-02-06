
import ReactDOM from "react-dom/client"
import { resdata } from "../resData";

const Header = () => {
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
                        about us
                    </li>
                    <li>
                        cart
                    </li>
                </ul>
            </div>
        </div>
    )
};
const RestroCard = ({ resdata }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = resdata.info;
    
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
    
    return (
        <div className="restro-card">
            <img 
                className="res-card-image" 
                src={imageUrl} 
                alt={name} 
            />
            <h2>{name}</h2>
            <h5>{cuisines[0]}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}
const restaurants =
    resdata.cards[0]
        .groupedCard
        .cardGroupMap
        .RESTAURANT
        .cards[0]
        .card
        .card
const looping_map =
    resdata.cards[0]
        .groupedCard
        .cardGroupMap
        .RESTAURANT
        .cards




const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>

            <div className="restro-container">
                 {
                    looping_map.map((restaurant) => {
                        return (
                            <RestroCard
                                resdata={restaurant.card.card}
                                key={restaurant.card.card.info.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
};
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<AppLayout />);