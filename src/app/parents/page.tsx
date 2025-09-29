import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PigDinner from '@/../public/headers/pig-dinner.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Parents',
  description: 'Parents Page for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
  openGraph: {
    title: 'Parents',
    description: 'Parents Page for the UT Dallas chapter of Phi Gamma Delta (FIJI).',
    url: '/parents',
  },
  alternates: {
    canonical: '/parents',
  },
};

export default function Recruitment() {
  return (
    <Page
      header={{
        title: 'Parents',
        image: PigDinner,
        alt: '',
      }}
    >
      <Section className="flex flex-col gap-4">
        <p>
          Whether your son is already a brother or is considering becoming one, we welcome the
          opportunity to inform you about our fraternity and answer any questions you might have.
        </p>
        <p>
          Phi Gamma Delta is a social fraternity, which means we are not exclusive to any one major
          or career. Instead, we aim to unite our members in enduring friendships, stimulate the
          pursuit of knowledge, and build courageous leaders who serve the world with the best that
          is in them.
        </p>
        <p>
          Phi Gamma Delta is a registered student organization under the UT Dallas{' '}
          <Link href="https://gogreek.utdallas.edu/" className="underline">
            Fraternity and Sorority Life
          </Link>{' '}
          (FSL) office and is one of 9 members of the{' '}
          <Link href="https://gogreek.utdallas.edu/councils/ifc/" className="underline">
            Interfraternity Council
          </Link>{' '}
          (IFC) at UT Dallas. FSL and IFC serve as the governing bodies for our fraternity as well
          the other IFC fraternities, providing representation, community building, and
          accountability.
        </p>
        <p>
          Phi Gamma Delta is committed to the elimination and prevention of hazing. We follow a new
          model to Build Courageous Leaders in which new brothers are initiated within 4 days of
          accepting an invitation to join and are henceforth brothers in every aspect. Built to Lead
          programming and a multilevel member development experience begins on the first day of
          affiliation and extends throughout the undergraduate experience. The program helps
          brothers build and strengthen the skills necessary to lead with courage. More information
          is available on our national website. Please see{' '}
          <Link href="https://phigam.org/undergraduates/hazing-prevention/" className="underline">
            Hazing Prevention & Elimination
          </Link>{' '}
          and{' '}
          <Link href="https://gogreek.utdallas.edu/councils/ifc/" className="underline">
            Our New Model: Built to Lead
          </Link>
          .
        </p>
        <p>
          UT Dallas is not like what you may see on TV. We are a commuter school where a large
          portion of students go home immediately after class. Finding a community for many means
          joining greek life and for those select few, that means Phi Gamma Delta.
        </p>
      </Section>
      <Section className="flex flex-col gap-4 items-center">
        <h3 className="text-xl">
          Please reach out via{' '}
          <Link href="mailto:utdfiji.president@gmail.com" className="font-bold underline">
            Email
          </Link>{' '}
          or on{' '}
          <Link href="https://www.instagram.com/utdfiji/" className="font-bold underline">
            Instagram
          </Link>{' '}
          with any questions or concerns.
        </h3>
      </Section>
    </Page>
  );
}
