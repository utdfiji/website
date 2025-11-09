import Footer from '@/components/Footer';
import Header, { type HeaderProps } from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

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
