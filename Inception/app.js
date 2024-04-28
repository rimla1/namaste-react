import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
    return (
        <input placeholder='Search'></input>
    )
}

const Card = (props) => {
    const {restaurantName, tags, review, deliveryTime} = props
    return (
        <div className='restaurant-card'>
            <img className="restaurant-photo" src='https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg'/>
            <h3>{restaurantName}</h3>
            <h6>{tags}</h6>
            <h6>{review}</h6>
            <h6>{deliveryTime}</h6>
        </div>
    )

}

const Body = () => {
    return (
    <div className='body'>
        <div className='search'>
            <Search />
        </div>
        <div className='restaurantsContainer'>
            <Card restaurantName="Rekic" tags="Mantije, Magistrala, Cevapi" review="4.5/5.0" deliveryTime="22 minutes"/>
            <Card restaurantName="Agusevic" tags="Mantije, Magistrala, Cevapi" review="4.9/5.0" deliveryTime="20 minutes"/>
            <Card restaurantName="Osman baba" tags="Doner" review="4.2/5.0" deliveryTime="15 minutes"/>
        </div>
    </div>
    )
}

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Your Website Name</p>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
    );
  }

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
