import { useEffect, useState } from "react";
import { resdata } from "../data/resData";
import RestroCard from "./restroCards";
import ShimmerUi from "./shimmer";

const Body = () => {

    let looping_map =
        resdata.cards[0]
            .groupedCard
            .cardGroupMap
            .RESTAURANT
            .cards

    const [data, setData] = useState([])

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
    
    useEffect(() => {
        fetchData();
        console.log("use effect call back is called thank you");
    }, [])

    async function fetchData() {
        const fetchingData = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.9728896&lng=73.8229516&str=Pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=5acbb6ca-c2eb-5c98-9027-846bb8b93dec&selectedPLTab=RESTAURANT");
        const data = await fetchingData.json();
        console.log("Data", data);
        console.log("Data", data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
        setData(data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
        return data;
    }

    //conditional rendring (jargaaannn ⚰️)
    function handleShimmer() {
        const shimmerCards = [];
        for (let i = 0; i < 10; i++) {
            shimmerCards.push(<ShimmerUi key={i} />);
        }
        console.log("shimmer cards is like this", shimmerCards);
        return (
            <div className="loading restro-container">
                {shimmerCards}
            </div>
        );
    }

    return data.length === 0 ? handleShimmer() : (
        <div className="body">
            <div className="filter">
                {/* <button className="btn-filter" onClick={fliteringOnClick}>
                    filter by top rated restro
                </button> */}

                <label htmlFor="rating">
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