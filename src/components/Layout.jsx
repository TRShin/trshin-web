import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="content">
        <div className="container">
          <h1>This is a test heading in Layout</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;