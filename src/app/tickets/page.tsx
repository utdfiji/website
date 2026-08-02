import BrothersDinner from '@/../public/headers/brothers-dinners.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';
import ZeffyModalCard from '@/components/ZeffyModalCard';
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
    formLink:
      'https://www.zeffy.com/embed/ticketing/tau-delta-fiji-monthly-donation-subscription-1848-club?modal=true',
    featured: true,
    buttonText: 'Join Now',
  },
  {
    title: 'NFCDA Dinner',
    subtitle: 'Event Tickets',
    price: 'Purchase Tickets',
    description:
      'Join us for the NFCDA Dinner, hosted by the Tau Delta Chapter of FIJI. Purchase your tickets without leaving this page.',
    formLink:
      'https://www.zeffy.com/embed/ticketing/nfcda-not-for-college-days-alone-dinner?modal=true',
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
            <ZeffyModalCard
              key={offering.title}
              title={offering.title}
              subtitle={offering.subtitle}
              price={offering.price}
              description={offering.description}
              buttonText={offering.buttonText}
              formLink={offering.formLink}
              featured={offering.featured}
            />
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
