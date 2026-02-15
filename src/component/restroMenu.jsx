import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerUi from "./shimmer";
import { usefetchDataCustomHook } from "../utils/api";
import RestCatTitle from "./resCatTitle";

const RestroMenu = () => {

    const [showList, setShowList] = useState(false);
    const [index, setIndex] = useState(0);
    const { id } = useParams();
    //custome hook
    const { preserveData, res_tilte } = usefetchDataCustomHook(id);

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

    function showListFunction()
    {
        if(i === index && showList)
        {
            setShowList(true)
        }
        else
        {
            setShowList(false)
        }
    }
    return (
        <div>
            <div>
                <h1 className="text-center py-2 font-bold text-6xl">
                    {res_tilte.name}
                </h1>
                <p className="text-center py-2 text-2xl font-bold">
                    {res_tilte?.cuisines?.join(", ")} - {res_tilte.costForTwo}
                </p>
            </div>
            <div className="flex flex-col items-center">
                {
                    preserveData.filter((undefined_filter_out) => {
                        return (
                            undefined_filter_out.card !== undefined
                        );
                    }).map((category, i) => {
                        return (
                            <RestCatTitle key={i} cat_name={category?.card?.card}
                                showList={i === index}    //true 
                                setIndex={() => setIndex(i)}      //1
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RestroMenu;
