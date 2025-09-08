import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PigDinner from '@/../public/headers/pig-dinner.jpg';
import Instagram from '@/components/Instagram';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Recruitment',
  description: 'Recruitment for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
  openGraph: {
    title: 'Recruitment',
    description: 'Recruitment for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
    url: '/recruitment',
  },
  alternates: {
    canonical: '/recruitment',
  },
};

export default function Recruitment() {
  return (
    <Page
      header={{
        title: 'Recruitment',
        image: PigDinner,
        alt: 'Group photo at Pig Dinner',
      }}
    >
      <Section className="flex flex-col gap-4">
        <p>
          To be a member of Phi Gamma Delta is to become a Brother for Life. We at the Tau Delta
          Chapter of Phi Gamma Delta take great pride and put forth a tireless effort to discover,
          recruit, and develop the best The University of Texas at Dallas has to offer.
        </p>
        <p>
          The future of our fraternity is determined by the quality of men we recruit each year.
          This is why we search for scholarly men who represent our five values of Friendship,
          Knowledge, Service, Morality, and Excellence; who understand that their first
          responsibility is their academics, and do not underestimate the power of giving back.
        </p>
        <p>
          We begin each semester with Recruitment, or Rush, seeking out men who are already
          interested in learning more about Greek Life at UTD. For the following weeks we focus our
          efforts on discovering new friends who we believe will not only enrich our fraternity but
          who will also benefit from becoming a Brother.
        </p>
      </Section>
      <Section className="flex flex-col gap-4 items-center">
        <h3 className="text-xl">
          Our{' '}
          <Link href="http://bit.ly/rushutdfiji" className="font-bold underline">
            Rush Form
          </Link>{' '}
          is the best way for us to stay in contact with you at the starts of semesters.
        </h3>
      </Section>
      <Section className="flex flex-col gap-4 items-center">
        <h3>
          For up to date information, please visit our{' '}
          <Link href="https://www.instagram.com/utdfiji/" className="font-bold underline">
            Instagram.
          </Link>
        </h3>
        <Instagram />
      </Section>
    </Page>
  );
}
