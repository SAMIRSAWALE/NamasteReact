import { useEffect, useState } from "react";
import { menuData } from "../data/menuData";
import { useParams } from "react-router";
import { MENU_API } from "../../constant";
import ShimmerUi from "./shimmer";
import { usefetchDataCustomHook } from "../utils/api";

const RestroMenu = () => {


    const { id } = useParams();
    //custome hook
    const { preserveData, res_tilte } = usefetchDataCustomHook(id);
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



    return res_tilte.length === 0 ? handleShimmer() : (
        <div className="restro-container flex justify-center">
            <div>
                <h2 className="text-center font-bold text-6xl text-orange-500">{res_tilte.name}</h2>
                <p className="text-center">{res_tilte.costForTwo}</p>
                <p className="text-center">{res_tilte.avgRating}</p>
                <p className="text-center">{res_tilte.cuisines.join(",")}</p>
                {
                    preserveData.slice(1).map((data, index) => {
                        return (
                            <div className="restro-menu-list py-3" key={data?.card?.card?.title + "_" + index}>
                                <div className="h-30 bg-orange-200">
                                    <h1 className="font-bold text-center py-10">{data?.card?.card?.title}</h1>
                                </div>
                               
                                <div className="">
                                    {
                                        data?.card?.card?.itemCards?.map((cat) => {
                                            return (
                                                <div key={cat?.card?.info?.id} className="bg-orange-100">
                                                    <h5 className="px-2">{cat?.card?.info?.name} - {cat?.card?.info.price / 100} rs</h5>
                                                    <p className="px-2">{cat?.card?.info?.description}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RestroMenu;
