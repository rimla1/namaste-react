import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../utils/useRestaurantInfo';

const Restaurant = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantInfo(id)

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className='p-4 m-4 border border-solid border-black rounded-xl shadow-lg'>
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
