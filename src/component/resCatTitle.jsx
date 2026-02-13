import { useEffect, useState } from "react";
import Item_list from "./itemList";

const RestCatTitle = ({ cat_name , showList ,setIndex }) => {

    const { title, itemCards } = cat_name;
    return (
        <div className="mx-auto bg-gray-100 m-3 py-3 w-6/12 rounded-lg shadow-lg">

            {/* Title Row */}
            <div className="flex justify-between items-center px-3 cursor-pointer" onClick={setIndex}>
                <h1 className="font-semibold text-lg">
                    {title} ({itemCards.length})
                </h1>
            </div>

            {/* Item List */}
            <div className="mt-2 px-3 item-center">
                <ul>
                    {showList ? <Item_list item_Cards={itemCards} /> : null}
                </ul>
            </div>

        </div>
    );
};

export default RestCatTitle;
