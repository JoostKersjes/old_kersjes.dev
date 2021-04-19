import { ReactElement, useState } from 'react';
import Link from 'next/link';

const menuItems: { text: string; href: string }[] = [
  { text: 'Home', href: '/' },
  { text: 'Joost', href: '/joost' },
];

function LayoutHeader(): ReactElement {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="kd_bg-gradient font-mono font-medium">
      <div className="flex justify-between items-center kd_max-w-container">
        <h1 className="text-cyan-200 font-bold text-lg sm:text-xl flex-shrink-0">
          <Link href="/">
            <a className="flex items-center hover:underline focus:underline">
              <img src="/catjam.gif" alt="Cat vibing GIF" width="50" className="mr-2 rounded" />
              <span>Kersjes.dev</span>
            </a>
          </Link>
        </h1>

        <nav className="block relative md:static text-pink-200 overflow-visible">
          <button
            className="md:hidden px-10 sm:px-14 py-2 w-full rounded shadow bg-white bg-opacity-10 hover:bg-opacity-25 focus:outline-none focus-visible:bg-opacity-25"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            Menu
          </button>

          {mobileMenu && (
            <div className="md:hidden right-3 -bottom-4 bg-pink-200 absolute w-4 h-4 transform rotate-45"></div>
          )}

          <ul
            className={`w-full rounded text-right absolute top-12 bg-pink-200 text-pink-700 overflow-hidden ${
              mobileMenu ? `max-h-[${(menuItems.length * 10) / 4}rem]` : 'max-h-0'
            } md:max-h-14 md:static md:flex md:space-x-4 md:items-center md:bg-opacity-0 md:text-pink-200 md:overflow-visible`}
          >
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href}>
                  <a className="block px-4 py-2 rounded md:shadow-lg md:bg-white md:bg-opacity-10 md:hover:bg-opacity-25 hover:bg-pink-100 md:focus-visible:bg-opacity-25 focus-visible:bg-pink-100">
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
