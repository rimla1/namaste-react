import { Card } from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantsData from '../utils/useRestaurantsData';

export const Body = () => {
  const { restaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantsData();
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState('');

  if (onlineStatus === false) return <h1>No internet connection</h1>;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex'>
        <div className='m-4 p-4 flex'>
          <input
            className='px-2 m-2 border border-solid border-black'
            type='text'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div>
            <button
              className='px-2 m-2 bg-green-950 text-white'
              onClick={() => {
                const filteredRestaurants = restaurants.filter((restaurant) => {
                  return restaurant.data.name
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase());
                });
                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
            <button
              className='px-2 m-2 bg-blue-950 text-white'
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
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={'restaurants/' + restaurant.data.id}
          >
            <Card restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
