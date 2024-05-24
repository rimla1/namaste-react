import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantInfo from '../utils/useRestaurantInfo';
import MenuCategory from './MenuCategory';
import { useState } from 'react';

const Restaurant = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantInfo(id);
  const categories = restaurantInfo?.data?.menu;
  const [showIndex, setShowIndex] = useState(null)

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div className='p-4 m-4 '>
      <div className='p-1 m-1 border border-solid border-black rounded-xl shadow-lg text-center'>
        <h1 className='font-bold text-2xl'> {restaurantInfo?.data?.name} </h1>
        <h4>{restaurantInfo?.data?.tags.join(', ')}</h4>
      </div>
      {categories.map((category, index) => {
        return (
          <MenuCategory
            key={category.title}
            categoryData={category}
            showItems={index === showIndex && true}
            changeIndex={() => {setShowIndex(index)}}
            closeIndex={() => {setShowIndex(null)}}
          />
        );
      })}
    </div>
  );
};

export default Restaurant;
