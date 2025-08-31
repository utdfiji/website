import type { StaticImageData } from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

interface Props {
  title: string;
  subtitle?: string;
  fontSize: 'regular' | 'large';
  image: StaticImageData;
}

export default function Page(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Navbar />
      <Header {...props} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
