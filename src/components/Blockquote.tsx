import React from 'react';

type BlockquoteProps = {
  children: React.ReactNode;
};

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return (
    <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

    <div className="flex items-center px-2 py-3">
      {/* <FontAwesomeIcon
        className="text-gray-600 dark:text-gray-200"
        icon={faPersonChalkboard}
      /> */}

      <div className="mx-3">
        <p className="text-gray-600 dark:text-gray-200">
          {children}
        </p>
      </div>
    </div>
  </div>
  );
};

export default Blockquote;
