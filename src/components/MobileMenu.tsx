import type { HTMLAttributes, ReactElement } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

interface Props extends HTMLAttributes<HTMLElement> {
  items: { text: string; href: string }[];
}

function MobileMenu({ items, children, ...rest }: Props): ReactElement {
  return (
    <Menu as="nav" {...rest}>
      <Menu.Button>Menu</Menu.Button>
      {items.map((item) => (
        <Menu.Item key={item.text}>
          {({ active }) => (
            <Link href={item.href}>
              <a className={`${active && 'bg-pink-100'}`}>{item.text}</a>
            </Link>
          )}
        </Menu.Item>
      ))}

      {children}
    </Menu>
  );
}

export default MobileMenu;
