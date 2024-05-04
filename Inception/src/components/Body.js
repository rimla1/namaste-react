import { Card } from './Card';
import { restaurants } from '../utils/restaurants';
import { useState } from 'react';

export const Body = () => {
  const [restaurantsState, setRestaurantsState] = useState(restaurants);
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRestaurants = restaurantsState.filter(
              (restaurant) => restaurant.data.review > 4
            );
            setRestaurantsState(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='restaurantsContainer'>
        {restaurantsState.map((restaurant) => (
          <Card key={restaurant.data.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};
