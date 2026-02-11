import { useEffect, useState } from "react";
import { MENU_API } from "../../constant";

export const usefetchDataCustomHook = (id) => {
    const [preserveData, setPreserveData] = useState([]);
    const [res_tilte, setResTitle] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        const data_res_raw = await fetch(MENU_API + id);
        const data = await data_res_raw.json();
        setResTitle(data.data.cards[2].card.card.info);
        setPreserveData(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
    }
    return {preserveData,res_tilte};
}