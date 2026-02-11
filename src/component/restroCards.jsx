const RestroCard = ({ resdata }) => {
    const {
        name,
        cloudinaryImageId,
        cuisines = [],
        avgRating,
        sla = {}
    } = resdata?.info || {};

    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

    return (
        <div className="bg-gray-200 rounded-xl shadow-xl h-100 m-5">
            <div className="restro-card w-60 m-10 p-2 justify-center">
                <img
                    className="res-card-image"
                    src={imageUrl}
                    alt={name}
                /> 
                <h2 className="text-lg font-bold pb-3 text-center">{name}</h2>
                <h5>{cuisines[0]}</h5>
                <h5>{avgRating}</h5>
                <h5>{sla.deliveryTime} mins</h5>
            </div>
        </div>

    )
}

export default RestroCard;
