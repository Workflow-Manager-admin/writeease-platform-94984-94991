import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

/**
 * MainLayout component that integrates Header, Sidebar, and Footer
 * Acts as a container for all pages
 */
const MainLayout = () => {
  return (
    <div className="writeease-app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <div className="page-container">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
