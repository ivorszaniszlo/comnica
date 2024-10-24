import React from 'react';
import Button from '../Button/Button';

const Aside: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start p-8 h-full z-10">
      <h4 className="text-2xl font-bold text-customPurple mb-2">
        Üdvözlöm a Comnica Signature-ben!
      </h4>
      <p className="text-base text-customGray font-normal mb-4">
        A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A
        folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje
        el, ha készen áll rá.
      </p>
      <Button
        text="KEZDHETJÜK"
        onClick={() => console.log('Button clicked!')}
      />
    </div>
  );
};

export default Aside;
