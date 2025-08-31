import Link from 'next/link';
import React from 'react';

import Logo from './Logo';

const groups = [
  {
    title: 'Site',
    links: [
      {
        title: 'Recruitment',
        href: '/recruitment',
      },
      {
        title: 'Philanthropy',
        href: '/philanthropy',
      },
      {
        title: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    title: 'External',
    links: [
      {
        title: 'National Fraternity',
        href: 'https://phigam.org/',
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/utdfiji/',
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/phigammadelta-taudelta/',
      },
      {
        title: 'Rush Form',
        href: 'http://bit.ly/rushutdfiji',
      },
      {
        title: 'Graduate Site',
        href: 'https://fiji-tau-delta-chapter.square.site/',
      },
      {
        title: 'Graduate Network',
        href: 'https://www.linkedin.com/groups/12942338/',
      },
      {
        title: 'UTD FSL',
        href: 'https://gogreek.utdallas.edu/',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple text-white w-full min-h-screen pb-10 md:px-40 px-8 pt-16 sm:pt-28 flex flex-col gap-8 justify-between">
      <Logo />
      <div className="grid grid-cols-2 gap-10">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col items-start gap-3">
            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
            {group.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                className="underline decoration-transparent hover:decoration-inherit transition"
              >
                {link.title}
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
