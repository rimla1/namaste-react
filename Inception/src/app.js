import ReactDOM from 'react-dom/client';
import React, { lazy, Suspense } from 'react';
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
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'))

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body/>
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
        element: <Restaurant />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  },

]);

root.render(<RouterProvider router={router} />);
