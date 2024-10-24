import React from 'react';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Container from './components/Container/Container';

const App: React.FC = () => {
  return (
    <div className="relative max-w-[1300px] mx-auto min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col gap-8 p-4 w-full relative z-10 bg-gradient-to-tr from-customGreen-darker to-customGreen">
        <div className="hidden md:block absolute top-0 right-0 md:w-1/2 lg:w-1/3 h-full bg-customGreen opacity-40 z-0"></div>
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full -mt-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex justify-center md:justify-start">
            <Container />
          </div>
          <div className="col-span-1 flex justify-center items-center md:justify-end relative">
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
