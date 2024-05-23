export const Card = (props) => {
  const { name, tags, review, deliveryTime, costForTwo, image } =
    props.restaurantData.data;
  return (
    <div className='m-4 p-4 w-[250px] h-[400px] border border-solid border-black rounded-2xl shadow-2xl hover:bg-gray-400'>
      <img
        className='h-[150px] w-[240px] p-2 rounded-xl shadow-xl'
        src={image}
      />
      <h3 className='font-bold py-1'>{name}</h3>
      <h6>{tags.join(', ')}</h6>
      <h6>Review {review}/5.0</h6>
      <h6>Delivery Time {deliveryTime}</h6>
      <h6>${costForTwo} For Two</h6>
    </div>
  );
};

export const withPromotedTag = (Card) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black bg-opacity-50 m-4 px-2 rounded-xl text-white'>Promoted</label>
        <Card {...props} />
      </div>
    );
  };
};
