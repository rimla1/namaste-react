import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const restaurants = [
  {
    type: 'restaurant',
    data: {
      name: 'Delicious Bites',
      tags: ['Italian', 'Pizza', 'Pasta'],
      review: 4.5,
      deliveryTime: '30-45 minutes',
      costForTwo: 25,
      address: '123 Main St',
      phoneNumber: '555-1234',
      website: 'http://www.deliciousbites.com',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg-dIZHqJhzA1yMBlLVo9zG-X5gQJS1j2Bo1U9Nl5Eg&s',
    },
  },
  {
    type: 'restaurant',
    data: {
      name: 'Tasty Treats',
      tags: ['American', 'Burgers', 'Fries'],
      review: 4.2,
      deliveryTime: '20-35 minutes',
      costForTwo: 20,
      address: '456 Oak St',
      phoneNumber: '555-5678',
      website: 'http://www.tastytreats.com',
      image:
        'https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg',
    },
  },
];

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <input placeholder='Search'></input>;
};

const Card = (props) => {
  const { restaurantData } = props;
  return (
    <div className='restaurant-card'>
      <img className='restaurant-photo' src={restaurantData.data.image} />
      <h3>{restaurantData.data.name}</h3>
      <h6>{restaurantData.data.tags.join(', ')}</h6>
      <h6>Review {restaurantData.data.review}/5.0</h6>
      <h6>Delivery Time {restaurantData.data.deliveryTime}</h6>
      <h6>${restaurantData.data.costForTwo} For Two</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        <Search />
      </div>
      <div className='restaurantsContainer'>
        {restaurants.map((restaurant, index) => (
          <Card key={index} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2024 Your Website Name</p>
        <ul className='footer-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
