import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar'; // Optional

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
