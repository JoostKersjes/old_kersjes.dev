import React, { ReactElement } from 'react';
import Link from 'next/link';

function NavBar(): ReactElement {
  return (
    <nav className="bg-gray-800 w-full flex">
      <Link href="/">
        <a className="p-4 text-white">Kersjes.dev</a>
      </Link>
      <Link href="/blog">
        <a className="p-4 text-white">Blog</a>
      </Link>
    </nav>
  );
}

export default NavBar;
