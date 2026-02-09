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
        <div className="restro-card">
            <img 
                className="res-card-image" 
                src={imageUrl} 
                alt={name} 
            />
            <h2>{name}</h2>
            <h5>{cuisines[0]}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}
export default RestroCard;