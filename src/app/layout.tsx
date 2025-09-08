import '@/styles/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

const belwe = localFont({
  src: [
    {
      path: '../../public/fonts/belwe/BelweLightBT.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/belwe/BelweMediumBT.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/belwe/BelweBoldBT.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-display',
});

const centuryGothic = localFont({
  src: [
    {
      path: '../../public/fonts/century-gothic/Century Gothic.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/century-gothic/Century Gothic Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/century-gothic/Century Gothic Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/century-gothic/Century Gothic Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-main',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utdfiji.org'),
  title: {
    template: '%s - UTD FIJI',
    default: 'UTD FIJI',
  },
  description: 'The Tau Delta chaper of Phi Gamma Delta (FIJI).',
  openGraph: {
    title: {
      template: '%s - UTD FIJI',
      default: 'UTD FIJI',
    },
    description: 'The Tau Delta chaper of Phi Gamma Delta (FIJI).',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  //copied from globals.css
  themeColor: '#500878',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <GoogleAnalytics gaId="G-3GD1RLTFS8" />
      )}
      <body className={`${centuryGothic.variable} font-main ${belwe.variable}`}>{children}</body>
    </html>
  );
}
