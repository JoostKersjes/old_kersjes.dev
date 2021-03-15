import React, { ReactElement, useState } from 'react';
import Link from 'next/link';

const menuItems: { text: string; href: string }[] = [
  { text: 'Home', href: '/' },
  { text: 'Joost', href: '/joost' },
  { text: 'News Feed', href: '/feed' },
];

function LayoutHeader(): ReactElement {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 font-mono p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-purple-200 text-xl">
          <Link href="/">
            <a className="flex items-center">
              <img src="/catjam.gif" alt="Cat vibing GIF" width="50" className="mr-2 rounded" />
              <span>Kersjes.dev</span>
            </a>
          </Link>
        </h1>

        <nav className="block text-blue-200 overflow-visible">
          <button
            className="md:hidden px-4 py-2 rounded shadow bg-white bg-opacity-10 hover:bg-opacity-25 w-full"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            Menu ▼
          </button>

          {mobileMenu && (
            <div className="md:hidden relative flex justify-center">
              <div className="bg-blue-200 absolute w-4 h-4 transform rotate-45"></div>
            </div>
          )}

          <ul
            className={`md:flex md:items-center md:static md:bg-opacity-0 md:text-blue-200 overflow-hidden ${
              mobileMenu ? `max-h-32` : 'max-h-0 md:max-h-10'
            } rounded text-right absolute right-4 top-16 bg-blue-200 text-blue-600`}
          >
            {menuItems.map((item) => (
              <li key={item.text} className="md:ml-4">
                <Link href={item.href}>
                  <a className="block px-4 py-2 md:rounded md:shadow md:bg-white md:bg-opacity-10 md:hover:bg-opacity-25 hover:bg-blue-100">
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default LayoutHeader;
