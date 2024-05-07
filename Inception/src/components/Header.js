import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [buttonValue, setButtonValue] = useState('Login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              buttonValue === 'Login'
                ? setButtonValue('Logout')
                : setButtonValue('Login');
            }}
          >
            {buttonValue}
          </button>
        </ul>
      </div>
    </div>
  );
};
