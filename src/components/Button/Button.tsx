import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-customTealLight hover:bg-customTeal text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
