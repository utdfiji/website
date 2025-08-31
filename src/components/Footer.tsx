import Link from 'next/link';
import React from 'react';

import Logo from './Logo';

const groups = [
  {
    name: 'Site',
    links: [
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
    ],
  },
  {
    name: 'External',
    links: [
      {
        name: 'National Fraternity',
        href: 'https://phigam.org/',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/utdfiji/',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/phigammadelta-taudelta/',
      },
      {
        name: 'Rush Form',
        href: 'http://bit.ly/rushutdfiji',
      },
      {
        name: 'Graduate Site',
        href: 'https://fiji-tau-delta-chapter.square.site/',
      },
      {
        name: 'Graduate Network',
        href: 'https://www.linkedin.com/groups/12942338/',
      },
      {
        name: 'UTD FSL',
        href: 'https://gogreek.utdallas.edu/',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple text-white w-full h-screen pb-10 md:px-40 px-8 pt-16 sm:pt-28 flex flex-col justify-between">
      <Logo />
      <div className="grid grid-cols-2 gap-10">
        {groups.map((group) => (
          <div key={group.name} className="flex flex-col items-start gap-3">
            <h3 className="text-xl font-semibold mb-4">{group.name}</h3>
            {group.links.map((link) => (
              <Link
                key={link.name}
                className="underline decoration-transparent hover:decoration-inherit transition"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div>
        <div className="border-t-2 border-white" />
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-8">
          <div className="flex gap-x-8 gap-y-1 justify-around md:justify-normal flex-wrap">
            <Link
              className="underline decoration-transparent hover:decoration-inherit transition"
              href="/legal/privacy-policy.txt"
            >
              Privacy Policy
            </Link>
            <Link
              className="underline decoration-transparent hover:decoration-inherit transition"
              href="/sitemap.xml"
            >
              Sitemap
            </Link>
          </div>
          <p className="md:text-right text-center text-xs">
            © 2025 Tau Delta Chapter of Phi Gamma Delta. Open-source under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
