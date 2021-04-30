import type { HTMLAttributes, ReactElement } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

// Fixes keyboard navigation for Next.js Link
// https://github.com/tailwindlabs/headlessui/issues/449
function NextLink(props: { href: string } & HTMLAttributes<HTMLAnchorElement>): ReactElement {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

interface Props extends HTMLAttributes<HTMLElement> {
  items: { text: string; href: string }[];
}

function MobileMenu({ items, children, ...rest }: Props): ReactElement {
  return (
    <Menu as="nav" {...rest}>
      <Menu.Button className="py-2 w-full rounded shadow text-pink-200 bg-white bg-opacity-10 hover:bg-opacity-25 focus-visible:bg-opacity-25">
        Menu
      </Menu.Button>
      <Menu.Items className="rounded w-[inherit] absolute top-14 bg-pink-200 text-pink-700 overflow-hidden">
        {items.map((item) => (
          <Menu.Item key={item.text}>
            {({ active }) => (
              <NextLink href={item.href} className={`${active && 'bg-pink-100'} block px-4 py-2`}>
                {item.text}
              </NextLink>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>

      {children}
    </Menu>
  );
}

export default MobileMenu;
