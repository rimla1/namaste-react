import { Card } from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);



  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/restaurants")
    const jsonData = await data.json()
    console.log(jsonData)
    setRestaurants(jsonData)
  }

  return restaurants.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.data.review > 4
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='restaurantsContainer'>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.data.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};
