import React, { ReactElement } from 'react';

function LayoutFooter(): ReactElement {
  return (
    <footer className="bg-gray-900 text-gray-600 p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <a href="mailto:joost@kersjes.dev">joost@kersjes.dev</a>
        <span>© 2021 Joost Kersjes</span>
      </div>
    </footer>
  );
}

export default LayoutFooter;
