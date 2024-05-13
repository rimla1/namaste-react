import { Card } from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantsData from '../utils/useRestaurantsData';

export const Body = () => {
  const {restaurants, filteredRestaurants, setFilteredRestaurants} = useRestaurantsData()
  const onlineStatus = useOnlineStatus()
  const [searchText, setSearchText] = useState('');


  if(onlineStatus === false) return <h1>No internet connection</h1>

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
          <Link key={restaurant.data.id}  to={"restaurants/" + restaurant.data.id}><Card restaurantData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};
