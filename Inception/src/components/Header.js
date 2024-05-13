import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
  const [buttonValue, setButtonValue] = useState('Login');
  const onlineStatus = useOnlineStatus()

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <span className="dot" style={{ backgroundColor: onlineStatus === true ? 'green' : 'red' }}></span>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
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
