import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

export const Header = () => {
  let [buttonValue, setButtonValue] = useState('Login');

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
