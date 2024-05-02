import { Search } from './Search';
import {Card} from "./Card";
import { restaurants } from '../utils/restaurants';

export const Body = () => {
    return (
      <div className='body'>
        <div className='search'>
          <Search />
        </div>
        <div className='restaurantsContainer'>
          {restaurants.map((restaurant) => (
            <Card key={restaurant.data.id} restaurantData={restaurant} />
          ))}
        </div>
      </div>
    );
  };