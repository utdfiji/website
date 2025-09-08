import type { Metadata } from 'next';
import React from 'react';

import UTD from '@/../public/headers/utd.jpg';
import Page from '@/components/Page';

export const metadata: Metadata = {
  title: '404',
  description: 'Not found in the Tau Delta chaper of Phi Gamma Delta (FIJI) website.',
  openGraph: {
    title: '404',
    description: 'Not found in the Tau Delta chaper of Phi Gamma Delta (FIJI) website.',
    url: '/404',
  },
  alternates: {
    canonical: '/404',
  },
};

export default function NotFound() {
  return (
    <Page
      header={{
        title: 'Not Found',
        subtitle: 'The requested page was not found on this site.',
        image: UTD,
        alt: 'Drone shot of UT Dallas',
      }}
    ></Page>
  );
}
