import { Card } from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('http://localhost:3000/restaurants');
    const jsonData = await data.json();
    setRestaurants(jsonData);
    setFilteredRestaurants(jsonData)
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            className='search-btn'
            onClick={() => {
              const filteredRestaurants = restaurants.filter((restaurant) => {
                return restaurant.data.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              });
              setFilteredRestaurants(filteredRestaurants)
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.data.review > 4
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='restaurantsContainer'>
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.data.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};
