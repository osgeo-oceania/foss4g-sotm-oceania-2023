import React from "react";

type TableProps = {
  children: React.ReactNode;
};

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col mt-6 not-prose">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-700">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
