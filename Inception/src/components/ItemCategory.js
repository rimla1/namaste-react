const ItemCategory = ({ items }) => {
  return (
    <div className='m-1 p-1 bg-gray-100'>
      {items?.map((item, index) => {
        return (
          <h1 key={index} className='m-2 p-2 border-b border-black text-center'>
            {item.name} : {item.price}$
          </h1>
        );
      })}
    </div>
  );
};

export default ItemCategory;
