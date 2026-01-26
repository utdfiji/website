import BrothersDinner from '@/../public/headers/brothers-dinners.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Tickets & Subscriptions',
  description: 'Purchase tickets and subscriptions for UT Dallas FIJI events.',
  openGraph: {
    title: 'Tickets & Subscriptions',
    description: 'Purchase tickets and subscriptions for UT Dallas FIJI events.',
    url: '/tickets',
  },
  alternates: {
    canonical: '/tickets',
  },
};

const offerings = [
  {
    title: 'Monthly Subscription',
    subtitle: 'Support Tau Delta',
    price: 'Starting at $5/month',
    description:
      'Become a steward of the Tau Delta legacy. Choose a subscription tier that works for you and help ensure the Royal Purple remains a standard of excellence, providing the financial backbone for undergraduate brothers to lead, learn, and grow.',
    href: 'https://www.zeffy.com/en-US/ticketing/tau-delta-fiji-monthly-donation-subscription-1848-club',
    featured: true,
    buttonText: 'Join Now',
  },
  {
    title: '14th Annual Frank Norris Pig Dinner',
    subtitle: 'Event Tickets',
    price: 'Purchase Tickets',
    description:
      'Join us for the 14th Annual Frank Norris Pig Dinner, hosted by the Tau Delta Chapter of FIJI. Click here to purchase your tickets for this special event.',
    href: 'https://www.zeffy.com/en-US/ticketing/14th-annual-frank-norris-pig-dinner',
    featured: true,
    buttonText: 'Purchase Tickets',
  },
];

export default function Tickets() {
  return (
    <Page
      header={{
        title: 'Support FIJI',
        image: BrothersDinner,
        alt: 'FIJI brothers at a formal dinner event',
      }}
    >
      <Section className="flex flex-col items-center gap-8">
        <p className="text-center text-lg max-w-2xl">
          Your support helps sustain the Tau Delta chapter of Phi Gamma Delta at UT Dallas. 100% of
          your contribution goes directly to our mission.
        </p>

        <div className="grid gap-6 w-full max-w-3xl">
          {offerings.map((offering) => (
            <Link
              key={offering.title}
              href={offering.href}
              target="_blank"
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                offering.featured
                  ? 'bg-gradient-to-br from-purple to-purple/80 text-white shadow-xl'
                  : 'bg-white text-dark-grey shadow-lg border border-gray-200'
              }`}
            >
              {offering.featured && (
                <div className="absolute top-4 right-4 bg-yellow text-purple text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div>
                  <p
                    className={`text-sm font-medium ${offering.featured ? 'text-yellow' : 'text-purple'}`}
                  >
                    {offering.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold font-display">{offering.title}</h3>
                </div>

                <p
                  className={`text-4xl font-bold ${offering.featured ? 'text-white' : 'text-purple'}`}
                >
                  {offering.price}
                </p>

                <p className={`${offering.featured ? 'text-white/90' : 'text-medium-grey'}`}>
                  {offering.description}
                </p>

                <div
                  className={`mt-4 inline-flex items-center gap-2 font-bold transition-all group-hover:gap-4 ${
                    offering.featured ? 'text-yellow' : 'text-purple'
                  }`}
                >
                  {offering.buttonText || 'Learn More'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sm text-medium-grey mt-8">
          Payments securely processed by{' '}
          <Link
            href="https://www.zeffy.com"
            target="_blank"
            className="underline hover:text-purple"
          >
            Zeffy
          </Link>{' '}
          - 100% goes to FIJI.
        </p>
      </Section>
    </Page>
  );
}
