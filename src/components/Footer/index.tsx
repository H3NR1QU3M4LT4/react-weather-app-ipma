import React from 'react';
import { formatDate } from '../../utils/FormatDate';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-200 py-4">
      <div className="sm: flex justify-center items-center text-gray-500 mb-1 py-4">
        <div className="hidden md:block md:px-8">
          © {formatDate(new Date())} <span className="font-bold">Henrique</span>
          {formatDate(new Date())} All rights reserved
        </div>
        <div className="hidden md:block md:px-8">
          Designed by
          <span className="font-bold">Henrique</span>
        </div>
      </div>
      <div className="md:hidden sm: flex font-light justify-center text-gray-500 text-sm py-4">
        © {formatDate(new Date())} <span className="font-bold">Henrique</span>
        {formatDate(new Date())} All rights reserved
      </div>
      <div className="md:hidden sm: flex font-light justify-center text-gray-500 text-sm py-4 mb-4">
        <p>
          Designed by
          <span className="font-bold">Henrique</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
