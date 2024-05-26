import ReactDOM from 'react-dom/client';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import Restaurant from './components/Restaurant';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import store from './redux/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import('./components/Grocery'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  const [username, setUsername] = useState('Rimla');
  useEffect(() => {
    const user = 'Almir Muminović';
    setUsername(user);
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ username: username, setUsername }}>
        <div className='app'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:id',
        element: <Restaurant />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
