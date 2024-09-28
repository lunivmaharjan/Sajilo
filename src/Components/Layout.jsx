// src/Components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  console.log(Outlet)
  return (
    <div className='layout'>
      <Navbar />
      <main className='main'>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
