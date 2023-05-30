import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  target?: string;
};

// // make links buttons
// props: {
// className: "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80",
// },

const Button: React.FC<ButtonProps> = ({ children, target }) => {
  return (
    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <a href={target} target='_blank'>{children}</a>
    </button>
    // <div className="flex w-full max-w-sm overflow-hidden rounded-lg shadow-md bg-gray-800">
    //     <div className="w-2 bg-gray-900"></div>

    //     <div className="flex items-center px-2 py-3">
    //     <div className="mx-3">
    //         <p className="text-gray-200">
    //         {children}
    //         </p>
    //     </div>
    //     </div>
    // </div>
  );
};

export default Button;