import React, { useEffect } from 'react';
import 'lazysizes';

const Container: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8">
      <div className="text-container lg:w-1/2 mt-16">
        <h4 className="text-4xl font-bold text-customTeal mb-2">
          Comnica Signature
        </h4>
        <p className="text-lg text-customGray font-semibold mb-4">
          Digitális aláíró szolgáltatás a Comnicától
        </p>
      </div>
      <div className="lg:w-1/2 max-w-md lg:mt-0">
        <img
          className="w-full lazyload"
          data-src="https://via.placeholder.com/420x420"
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

export default Container;
