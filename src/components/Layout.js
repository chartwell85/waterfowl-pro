import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  MapPin,
  Duck,
  Map,
  Notebook,
  Users,
  Settings
} from 'lucide-react';

const navItems = [
  { name: 'Migration', path: '/', icon: <Duck size={22} /> },
  { name: 'Flight™', path: '/forecast', icon: <MapPin size={22} /> },
  { name: 'Map', path: '/map', icon: <Map size={22} /> },
  { name: 'Journal', path: '/journal', icon: <Notebook size={22} /> },
  { name: 'Social', path: '/social', icon: <Users size={22} /> },
  { name: 'Utils', path: '/utils', icon: <Settings size={22} /> },
];

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          🦆
          <h1 className="text-lg font-semibold">Waterfowl Pro</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="hidden sm:inline">Pacific Flyway</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t flex justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? 'text-blue-600 font-bold' : 'text-gray-500'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
