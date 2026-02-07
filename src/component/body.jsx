import { useState } from "react";
import { resdata } from "../data/resData";
import RestroCard from "./restroCards";

const Body = () => {

    let looping_map =
        resdata.cards[0]
            .groupedCard
            .cardGroupMap
            .RESTAURANT
            .cards

    const [data, setData] = useState(looping_map)

    function fliteringOnClick(num) {
        let filteredData = looping_map.filter(
            (restaurant) =>
                restaurant?.card?.card?.info?.avgRating <= num
        );
        setData(filteredData);
    }

    function resetFilter() {
        setData(looping_map);
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="btn-filter" onClick={fliteringOnClick}>
                    filter by top rated restro
                </button>

                <label for="rating">
                    choose the rating
                </label>
                <select
                    id="rating"
                    onChange={(e) => fliteringOnClick(Number(e.target.value))}
                >
                    <option value="">Select</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    
                </select>

            </div>

            <div className="restro-container">
                {
                    data.map((restaurant) => {
                        console.log("this is the data ", restaurant);
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
export default Body;