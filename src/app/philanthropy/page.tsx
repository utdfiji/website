import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CarBash from '@/../public/headers/car-bash.jpg';
import BackBeforeAfter from '@/../public/philanthropy/back-before-after.jpg';
import FrontBeforeAfter from '@/../public/philanthropy/front-before-after.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Philanthropy',
  description: 'Philanthropy for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
  openGraph: {
    title: 'Philanthropy',
    description: 'Philanthropy for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
    url: '/philanthropy',
  },
  alternates: {
    canonical: '/philanthropy',
  },
};

export default function Philanthropy() {
  return (
    <Page
      header={{
        title: 'Philanthropy',
        image: CarBash,
        alt: 'The Car Bash setup at the Chess Plaza',
      }}
    >
      <Section className="flex flex-col gap-4">
        <p>
          Philanthropy is an important part of how we&apos;re able to give back to our community. In
          addition to park cleanups and volunteering for the Heard Natural Science Museum and
          Wildlife Sanctuary, the Tau Delta chapter puts on Car Bash once a semester. Car Bash is a
          day-long event where FIJI brings a car onto the UT Dallas campus and hundreds of passerby
          are allowed to smash, bash, and destroy the car with anything from a sledge hammer to a
          crowbar. Car Bash raises money in support of the{' '}
          <Link href="https://www.redcross.org/" className="font-bold underline">
            American Red Cross
          </Link>{' '}
          who provide emergency assistance, disaster relief, and disaster preparedness education in
          the United States.
        </p>
      </Section>
      <Section className="flex flex-wrap gap-4 justify-center">
        <Image
          src={FrontBeforeAfter}
          alt="Front of the car before and after Car Bash"
          width={400}
          height={400}
          className="min-w-64 w-auto max-w-full"
        />
        <Image
          src={BackBeforeAfter}
          alt="Back of the car before and after Car Bash"
          width={400}
          height={400}
          className="min-w-64 w-auto max-w-full"
        />
      </Section>
      <Section className="flex flex-col gap-4 items-center">
        <h3 className="text-xl">
          Look out for the next Car Bash on our{' '}
          <Link href="https://www.instagram.com/utdfiji/" className="font-bold underline">
            Instagram
          </Link>
          .
        </h3>
      </Section>
    </Page>
  );
}
