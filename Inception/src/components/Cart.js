import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteItem } from '../redux/cartSlice';

const Cart = () => {
  const items = useSelector((state) => {
    return state.cart.items;
  });
  const dispatch = useDispatch()
  const handleClearCartClick = () => {
    dispatch(clearCart())
  }
  const handleDeleteLastAddedItemClick = () => {
    dispatch(deleteItem())
  }

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='m-12 mx-auto p-12 bg-white shadow-md rounded-lg'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='text-right'>
          <p className='text-lg'>
            Items: <span className='font-semibold'>{items.length || 0}</span>
          </p>
          <p className='text-lg'>
            Total: <span className='font-semibold'>{total}$</span>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <div
            key={index}
            className='p-4 border rounded-lg shadow-sm bg-gray-50'
          >
            <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
            <p className='text-lg'>Price: {item.price}$</p>
          </div>
        ))}
      </div>
      <div className='flex justify-end mt-6 space-x-4'>
        <button onClick={handleClearCartClick} className='px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75'>
          Clear Cart
        </button>
        <button onClick={handleDeleteLastAddedItemClick} className='px-4 py-2 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75'>
          Delete Last Added Item
        </button>
      </div>
    </div>
  );
};

export default Cart;
