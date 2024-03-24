import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({ children, target }) => {
  return (
    <button className="not-prose px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      <a href={target} target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  );
};

export default Button;
