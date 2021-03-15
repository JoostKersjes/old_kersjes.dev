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
              {/* TODO: use local gif */}
              <img
                src="https://media.tenor.com/images/fbe87eaae3021042c02739d0634306f2/tenor.gif"
                alt="Catjam GIF"
                width="50"
                className="mr-2 rounded"
              />
              <span>Kersjes.dev</span>
            </a>
          </Link>
        </h1>

        <nav className="block text-blue-200 overflow-visible">
          <button
            className="md:hidden px-4 py-2 rounded shadow bg-white bg-opacity-10 hover:bg-opacity-25 w-full"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            Menu
          </button>

          <ul className="hidden md:flex md:items-center">
            {menuItems.map((item) => (
              <li key={item.text} className="ml-4">
                <Link href={item.href}>
                  <a className="block px-4 py-2 rounded shadow bg-white bg-opacity-10 hover:bg-opacity-25">
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {/* TODO: Make mobile menu use the normal menu HTML */}
          {/* TODO: Use a dropdown menu */}
          <ul
            className={`md:hidden ${
              mobileMenu ? `max-h-32` : 'max-h-0'
            } bg-gray-300  text-gray-700 font-mono overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none text-center rounded-b-lg`}
          >
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href}>
                  <a className="block px-4 py-2 hover:bg-gray-200">{item.text}</a>
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
