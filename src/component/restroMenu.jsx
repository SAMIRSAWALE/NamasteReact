import { useEffect, useState } from "react";
import { menuData } from "../data/menuData";


const RestroMenu = () => {

    const [preserveData, setPreserveData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        const data_res_raw = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/nashik/pizza-hut-2-college-road/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D&location=&isMobile=0");
        const data = await data_res_raw.json();
        // console.log("thisi s the data",data);
        setPreserveData(data.page_data.order.menuList.menus);
    }


    console.log("this is the data", preserveData)


    return (

        <div className="restro-container">
            <div className="restro-info">
                <h1 className="restro name">name</h1>
                <p className="address">trimurti chwo</p>
                <p className="estimated-time">30 min</p>
            </div>
            {
                preserveData.map((data) => {
                    return (
                        <div className="restro-menu-list" key={data.menu.id}>
                            <h1>{data.menu.name}</h1>
                            <div>
                                {
                                    data.menu.categories.map((cat) => {
                                        return(
                                        <div key={cat.category.id}>
                                            {
                                                cat.category.items.map((data_2) => {
                                                    return (
                                                        <div key={data_2.item.id}>
                                                            <h5>{data_2.item.name}</h5>
                                                            <p>{data_2.item.desc}</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>


    )
}
export default RestroMenu;


