import React, { useEffect } from 'react';
import 'lazysizes';

const Header: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <header className="flex items-center justify-start">
      <div className="flex items-center mt-2 ml-2">
        <img
          className="w-36 h-auto animate-fade-in lazyload"
          data-src="/assets/logo.svg"
          alt="Comnica Logo"
        />
      </div>
    </header>
  );
};

export default Header;
