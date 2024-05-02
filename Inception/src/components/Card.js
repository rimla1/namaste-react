export const Card = (props) => {
    const { name, tags, review, deliveryTime, costForTwo, image } = props.restaurantData.data;
    return (
      <div className='restaurant-card'>
        <img className='restaurant-photo' src={image} />
        <h3>{name}</h3>
        <h6>{tags.join(', ')}</h6>
        <h6>Review {review}/5.0</h6>
        <h6>Delivery Time {deliveryTime}</h6>
        <h6>${costForTwo} For Two</h6>
      </div>
    );
  };