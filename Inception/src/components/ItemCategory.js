import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ItemCategory = ({ items }) => {

  const dispatch = useDispatch()
  const handleClick = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className='m-1 p-1 bg-gray-100'>
      {items?.map((item, index) => {
        return (
          <div key={index} className=' border-b border-black text-center'>
          <h1 key={index} className='m-2 p-2'>
            {item.name} : {item.price}$
          </h1>
          <button className='m-2 p-2 border border-solid border-black text-white bg-gray-700' onClick={() => handleClick(item)}>Add +</button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCategory;
