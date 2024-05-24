import ItemCategory from './ItemCategory';

const MenuCategory = (props) => {
  const { categoryData, showItems, changeIndex, closeIndex } = props;
  const handleClick = () => {
    showItems ? closeIndex() : changeIndex()
}
  return (
    <div className='w-6/12 m-auto my-4'>
      <div
        className='bg-gray-100 shadow-lg rounded-lg flex justify-between cursor-pointer'
        onClick={handleClick}
      >
        <span className='font-bold'>
          {categoryData.title} ({categoryData.items.length})
        </span>
        <span className='mr-2'>|||</span>
      </div>
      {showItems && <ItemCategory items={categoryData.items} />}
    </div>
  );
};

export default MenuCategory;
