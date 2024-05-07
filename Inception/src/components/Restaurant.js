import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/restaurants/' + id);
    const jsonData = await data.json();
    setRestaurantInfo(jsonData);
  };

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className='restaurant'>
      <div className='restaurantInfo'>
        <h1>
          {restaurantInfo?.data?.name} : {restaurantInfo?.data?.review}
        </h1>
        <h4>{restaurantInfo?.data?.tags.join(', ')}</h4>
        <p>{restaurantInfo?.data?.deliveryTime}</p>
      </div>
      <div className='menu'>
        <ul>
          {restaurantInfo?.data?.menu?.map((dish) => {
            return (
              <li key={dish.price}>
                {dish.name} : ${dish.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
