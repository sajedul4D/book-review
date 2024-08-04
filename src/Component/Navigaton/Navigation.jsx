import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="border-b border-gray-200">
        <NavLink
          to="/listbooks"
          className={({ isActive }) =>
            isActive
              ? 'inline-block p-2 border-b-2 border-gray-800'
              : 'inline-block p-2 text-gray-500'
          }
        >
          Read Books
        </NavLink>
        <NavLink
          to="/wishlist-books"
          className={({ isActive }) =>
            isActive
              ? 'inline-block p-2 border-b-2 border-gray-800'
              : 'inline-block p-2 text-gray-500'
          }
        >
          Wishlist Books
        </NavLink>
      </div>
    );
};

export default Navigation;