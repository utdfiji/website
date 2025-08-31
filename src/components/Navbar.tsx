import Link from 'next/link';
import React from 'react';

import Logo from './Logo';

const links = [
  {
    name: 'Test',
    href: '/',
  },
  {
    name: 'Test2',
    href: '/',
  },
  {
    name: 'Test3',
    href: '/',
  },
  {
    name: 'Test4',
    href: '/',
  },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-purple text-white flex flex-wrap gap-2 items-center p-2 pr-6">
      <Logo />
      <div className="flex flex-wrap gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-bold underline decoration-transparent hover:decoration-inherit transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
