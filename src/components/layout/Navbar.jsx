import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            ZNTRIX <span className="text-blue-600">TOOLS</span>
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          <NavLink
            to="/all-tools"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`
            }
          >
            All Tools
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}