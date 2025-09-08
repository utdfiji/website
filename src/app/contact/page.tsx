import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import Grads from '@/../public/headers/grads.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Tau Delta chapter of Phi Gamma Delta (FIJI).',
  openGraph: {
    title: 'Contact',
    description: 'Contact the Tau Delta chapter of Phi Gamma Delta (FIJI).',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

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

export default function Contact() {
  return (
    <Page
      header={{
        title: 'Contact Us',
        image: Grads,
        alt: 'Group photo of graduate and undergraduate brothers',
      }}
    >
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
          <p>
            Phi Gamma Delta
            <br />
            800 W. Campbell Road, SU 1.610
            <br />
            Richardson, TX 75080
          </p>
        </div>
      </Section>
    </Page>
  );
}
