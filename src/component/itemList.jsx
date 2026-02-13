const Item_list = ({ item_Cards }) => {
    // console.log("the image data", item_Cards);

    return (
        <div className="text-center">
            {
                item_Cards.map((item) => {
                    const image_url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`
                    console.log("this is it the care image ids", image_url);
                    return (
                        <div key={item.card.info.id} className="text-left bg-white rounded-lg border-2 shadow-lg py-2 my-2 flex justify-between">
                            <div>
                                <h1 className="px-1 font-bold">{item.card.info.name}</h1>
                                <p className="px-1">Rs. {item.card.info.price / 100}</p>
                                <p className="px-1">{item.card.info.description}</p>
                            </div>
                            <div className="relative">
                                <img
                                    className="res-card-image w-24 shadow-xl rounded-xl"
                                    src={image_url}
                                    alt={item.card.info.name}
                                />

                                <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-md font-bold text-orange-400">
                                    + Add
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Item_list;