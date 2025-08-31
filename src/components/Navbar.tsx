import Link from 'next/link';
import React from 'react';

import Logo from './Logo';

const links = [
  {
    title: 'Recruitment',
    href: '/recruitment',
  },
  {
    title: 'Philanthropy',
    href: '/philanthropy',
  },
  {
    title: 'Graduate Site',
    href: 'https://fiji-tau-delta-chapter.square.site/',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-purple text-white flex flex-wrap gap-2 items-center p-2 pr-6">
      <Logo />
      <div className="flex flex-wrap gap-6">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : '_self'}
            className="font-bold underline decoration-transparent hover:decoration-inherit transition"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
