import Link from 'next/link';
import React from 'react';

import Grads from '@/../public/headers/grads.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

const links = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/phigammadelta-taudelta/',
  },
  {
    title: 'Rush Form',
    href: 'http://bit.ly/rushutdfiji',
  },
  {
    title: 'Email',
    href: 'utdfiji.president@gmail.com',
  },
];

export default function Philanthropy() {
  return (
    <Page title="Contact Us" image={Grads}>
      <Section className="flex flex-col gap-8 items-center">
        <h3 className="text-xl">
          Instagram is the best place to stay up to date with our latest updates and events.
        </h3>
        <Link href="https://www.instagram.com/utdfiji/" className="text-2xl font-bold underline">
          Instagram
        </Link>
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-xl">You can also find us here:</h4>
          {links.map((link) => (
            <Link key={link.title} href={link.href} className="text-lg font-bold underline">
              {link.title}
            </Link>
          ))}
        </div>
      </Section>
    </Page>
  );
}
