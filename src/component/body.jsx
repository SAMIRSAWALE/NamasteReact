import { useEffect, useState } from "react";
import RestroCard, { RestroCardPromoted } from "./restroCards";
import ShimmerUi from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //pagination
    const PAGE_SIZE = 3;
    const status = useOnlineStatus();
    const [data, setData] = useState([])
    const [preserveData, setpreserveData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);


    const Example_hof  = RestroCardPromoted(RestroCard);

    if (!status) {
        return (
            <h1>Connect to internet Please</h1>
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    const totalPages = Math.ceil(preserveData.length / PAGE_SIZE);
    const li_component = Array.from({ length: totalPages });

    async function fetchData() {
        const fetchingData = await fetch(
            "https://namastedev.com/api/v1/listRestaurants"
        );
        const data = await fetchingData.json();

        // ✅ ONLY THIS ACCESS IS UPDATED
        // console.log("this is the data", data)
        const resturant =
            data.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // console.log("resturant data ", resturant);
        setpreserveData(resturant);

        // const filterDataInit = [];
        // for (let i = 0; i <= PAGE_SIZE; i++) {
        //     filterDataInit.push(resturant?.[i]);
        // }
        // console.log("this is the data ->>> ", filterDataInit)
        setData(resturant);
        return data;
    }


    function fliteringOnClick(num) {
        // console.log(num,"this is the data")
        if (num == 0) {
            setData(preserveData);
        }
        // console.log("e.value is giving me this ", num);
        let filteredData = preserveData.filter(
            (restaurant) =>
                restaurant?.info?.avgRating <= num
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
                return pd?.info?.name.toLowerCase().includes(searchToLowerCase);
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
        for (let i = start + 1; i < end; i++) {
            filterData.push(preserveData[i]);
        }
        setData(filterData);
    }


    //hard reset
    function handleReset() {
        setData(preserveData);
        setFlag(false);
    }

    return data.length === 0 ? handleShimmer() : (
        <div className="body justify-center">
            <div className="filter justify-center flex-wrap flex">
                <div className="m-5">
                    <input
                        className="search-box shadow-orange-400 shadow-lg m-2 border-4 border-orange-500 rounded-md"
                        id="search"
                        type="text"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="font-mono p-2 cursor-pointer bg-orange-200 rounded-lg hover:bg-amber-200" onClick={handleSearch}>
                        Search The RESTRO 🔎
                    </button>
                </div>
                <div className="m-5">
                    <button className="p-2 bg-orange-300 border-orange-600 border-2 text-zinc-50 rounded-lg shadow-lg" onClick={handleReset}>
                        reset Restro
                    </button>
                </div>
                <div className="m-5">
                    <label htmlFor="rating" className="p-2 h-full  border-orange-600 border-2 rounded-lg shadow-lg">
                        choose the rating
                    </label>
                    <select
                        id="rating"
                        onChange={(e) => fliteringOnClick(Number(e.target.value))}
                        className="ml-1  bg-orange-300 border-orange-600 border-2 text-zinc-50 rounded-lg shadow-lg" style={{ height: 41.5 }}
                    >
                        <option value="" className="font-mono">Select</option>
                        <option value="1" className="font-mono">1+</option>
                        <option value="4.3" className="font-mono">4.4</option>
                        <option value="4.5" className="font-mono">4.5+</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center my-4">
                <h3 className="text-lg font-semibold">
                    Page {currentPage}
                </h3>
            </div>
            {flag ? (
                <h1>No Data found sorry for that</h1>
            ) : (
                <div className="restro-container flex-wrap flex justify-center">
                    {
                        data
                            .filter((restaurant) =>
                                restaurant?.info?.name !== "Spice Kingdom"
                            )
                            .map((restaurant, index) => {
                                const id_extractor = restaurant?.info?.id;

                                return (
                                    <Link
                                        to={"/resturant/" + id_extractor}
                                        key={restaurant?.info?.id ?? index}
                                    >
                                    </Link>
                                );
                            })
                    }
                </div>
            )}

            {/* <div>
                <ul className="pagination-box flex justify-center">
                    {
                        li_component.map((_, i) => {
                            return (
                                <li className="li-pagination bg-orange-300 border-2 rounded-lg m-4 p-3 w-50 h-50" key={i}>
                                    <button
                                        value={i}
                                        className="pagination-buttons"
                                        onClick={() => handlePagination(i)}
                                    >
                                        {i}
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div> */}
        </div>
    )
}

export default Body;
