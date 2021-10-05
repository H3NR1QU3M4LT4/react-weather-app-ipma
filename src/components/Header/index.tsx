import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-white-700 flex-1 w-full">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between p-4 mx-auto md:p-8 sm: py-6">
        <div className="item container flex justify-between items-center">
          <h1>Header</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
