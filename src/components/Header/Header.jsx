import React, { Suspense } from 'react';
import './Header.css';

const Header = () => {
  const Logo = React.lazy(() => import('../assets/logo.svg'));

  return (
    <header className="app-header">
      <div className="logo-container">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={Logo} alt="Comnica Logo" className="logo" />
        </Suspense>
      </div>
    </header>
  );
};
