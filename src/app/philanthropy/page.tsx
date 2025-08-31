import type { Metadata } from 'next';
import React from 'react';

import CarBash from '@/../public/headers/car-bash.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Philanthropy',
};

export default function Philanthropy() {
  return (
    <Page title="Philanthropy" image={CarBash}>
      <Section className="flex flex-col gap-4"></Section>
    </Page>
  );
}
