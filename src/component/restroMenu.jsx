import { useEffect, useState } from "react";
import { menuData } from "../data/menuData";


const RestroMenu = () => {

    const [preserveData, setPreserveData] = useState([]);

    useEffect(() => {
           const data = menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.slice(2).cards
    setPreserveData(data);
    })
 

    console.log("this is the data",preserveData)


    return (

        <div className="restro-container">
            <div className="restro-info">
                <h1 className="restro name">name</h1>
                <p className="address">trimurti chwo</p>
                <p className="estimated-time">30 min</p>
            </div>
            {/* {
                preserveData.map(() => {
                    return (
                        <div className="restro-menu-list">
                            {
                                preserveData.map((data , i) => {
                                    <div>
                                    <h1>{data.cards[i].card.card.title}</h1>
                                    <ul>
                                      {
                                        preserveData.data.itemCards.slice(3).map((menu_data , x) => {
                                            <li>
                                               {medu_data.card.info.name} 
                                            </li>
                                        })
                                      }
                                    </ul>
                                    </div>
                                })
                            }
                        </div>
                    )
                })
            } */}
        </div>


    )
}
export default RestroMenu;


