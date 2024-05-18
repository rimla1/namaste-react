import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
  const [buttonValue, setButtonValue] = useState('Login');
  const onlineStatus = useOnlineStatus()

  return (
    <div className='flex justify-between shadow'>
      <div className='logo-container'>
        <img className='w-24' src={LOGO_URL} />
      </div>
      <div className='items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            <span className={onlineStatus === true ? 'bg-green-800' : 'bg-red-800'}></span>
          </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>Cart</li>
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
