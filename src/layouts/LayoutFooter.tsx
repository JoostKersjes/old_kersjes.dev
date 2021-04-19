import type { ReactElement } from 'react';

function LayoutFooter(): ReactElement {
  return (
    <footer className="bg-gray-900 text-gray-600">
      <div className="flex justify-end items-center space-x-2 divide-x divide-gray-600 kd_max-w-container">
        <a className="hover:underline focus:underline" href="mailto:joost@kersjes.dev">
          joost@kersjes.dev
        </a>
        <span className="pl-2 from-cyan-500">&copy; 2021 Joost Kersjes</span>
      </div>
    </footer>
  );
}

export default LayoutFooter;
