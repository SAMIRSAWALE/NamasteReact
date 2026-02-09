import { useEffect, useState } from "react";
import { resdata } from "../data/resData";
import RestroCard from "./restroCards";
import ShimmerUi from "./shimmer";

const Body = () => {

    //pagination
    const PAGE_SIZE = 16;
    const [data, setData] = useState([])
    const [preserveData, setpreserveData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchData();
    }, [])
    const totalPages = Math.ceil(preserveData.length / PAGE_SIZE);
    const li_component = Array.from({ length: totalPages });

    async function fetchData() {
        const fetchingData = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.9728896&lng=73.8229516&str=Pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=5acbb6ca-c2eb-5c98-9027-846bb8b93dec&selectedPLTab=RESTAURANT");
        const data = await fetchingData.json();
        // console.log("data", data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards.length);
        const resturant = data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
        setpreserveData(data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
        const filterDataInit = [];
        for (let i = 0; i <= PAGE_SIZE; i++) {
            filterDataInit.push(resturant[i]);
        }
        setData(filterDataInit);
        return data;
    }


    function fliteringOnClick(num) {
        if (num == 0) {
            setData(preserveData);
        }
        // console.log("e.value is giving me this ", num);
        let filteredData = preserveData.filter(
            (restaurant) =>
                restaurant?.card?.card?.info?.avgRating <= num
        );
        // console.log("fil", filteredData.length)
        if (filteredData.length == 0) {
            setFlag(true);
        }
        else {
            setData(filteredData);
            setFlag(false);
        }
    }

    //conditional rendring (jargaaannn ⚰️)
    function handleShimmer() {
        const shimmerCards = [];
        for (let i = 0; i < 10; i++) {
            shimmerCards.push(<ShimmerUi key={i} />);
        }
        // console.log("shimmer cards is like this", shimmerCards);
        return (
            <div className="loading restro-container">
                {shimmerCards}
            </div>
        );
    }

    function handleSearch() {
        let searchToLowerCase = searchText.toLowerCase();
        let matchedData = preserveData.filter(
            (pd) => {
                return pd?.card?.card?.info?.name.toLowerCase().includes(searchToLowerCase);
            }
        );
        if (matchedData.length == 0) {
            setFlag(true);
        }
        else {
            // console.log("filtered data", matchedData);
            setData(matchedData);
            setFlag(false);
        }
    }

    //for pagination purpose 
    function handlePagination(pageNum) {
        setCurrentPage(pageNum);
        let start = (pageNum * PAGE_SIZE) + (pageNum - 1);
        let end = start + PAGE_SIZE;
        let filterData = [];
        for (let i = start; i <= end; i++) {
            filterData.push(preserveData[i]);
        }
        // console.log("most importent data",filterData);        
        setData(filterData);
    }


    //hard reset
    function handleReset() {
        setData(preserveData);
        setFlag(false);
    }

    return data.length === 0 ? handleShimmer() : (
        <div className="body">
            <div className="filter">
                {/* searchbox */}
                <input className="search-box" id="search" type="text" name="" onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={handleSearch}>
                    Search The RESTRO 🔎
                </button>

                <button className="reset-btn" onClick={handleReset}>reset Restro</button>

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

            <div>
                <h3>Page {currentPage}</h3>
            </div>
            {flag ?
                <h1>No Data found sorry for that</h1> :
                <div className="restro-container">
                    {
                        data.map((restaurant, index) => {
                            return (
                                <RestroCard
                                    resdata={restaurant?.card?.card}
                                    key={restaurant?.card?.card?.info?.id ?? index}
                                />
                            )
                        })
                    }
                </div>}

            {/* pagination */}
            <div>
                <ul className="pagination-box">
                    {
                        li_component.map((_, i) => {
                            return <li className="li-pagination" key={i}>
                                <button value={i} className="pagination-buttons" onClick={() => handlePagination(i)}>
                                    {i}
                                </button>
                            </li>;

                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Body;