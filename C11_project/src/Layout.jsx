import React from 'react';
import Navbar from "./pages/Navbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='font-san font-normal tracking-wide'>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
