import React, { ReactElement, ReactNode } from 'react';
import LayoutContainer from './LayoutContainer';
import LayoutHeader from './LayoutHeader';

interface Props {
  children: ReactNode;
}

function TopBarLayout({ children }: Props): ReactElement {
  return (
    <LayoutContainer extraClassNames="grid auto-rows-max">
      <LayoutHeader />
      <main className="bg-gray-800">{children}</main>
    </LayoutContainer>
  );
}

export default TopBarLayout;
