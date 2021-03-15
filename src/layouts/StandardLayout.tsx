import React, { ReactElement, ReactNode } from 'react';
import LayoutContainer from './LayoutContainer';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

interface Props {
  children: ReactNode;
}

function StandardLayout({ children }: Props): ReactElement {
  return (
    <LayoutContainer extraClassNames="grid grid-rows-layout">
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </LayoutContainer>
  );
}

export default StandardLayout;
