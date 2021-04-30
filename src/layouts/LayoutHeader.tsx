import Link from 'next/link';
import type { ReactElement } from 'react';

import MobileMenu from '../components/MobileMenu';

const menuItems: { text: string; href: string }[] = [
  { text: 'Home', href: '/' },
  { text: 'Joost', href: '/joost' },
];

function LayoutHeader(): ReactElement {
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

        <MobileMenu items={menuItems} className="md:hidden" />

        <nav className="hidden md:block text-pink-200">
          <ul className="flex space-x-4 bg-opacity-0">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.href}>
                  <a className="block px-4 py-2 rounded shadow-lg bg-white bg-opacity-10 hover:bg-opacity-25 focus-visible:bg-opacity-25">
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
