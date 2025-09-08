import React from 'react';

import Footer from '@/components/Footer';
import Header, { type HeaderProps } from '@/components/Header';
import Navbar from '@/components/Navbar';

interface Props {
  header: HeaderProps;
}

export default function Page(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Navbar />
      <Header {...props.header} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
