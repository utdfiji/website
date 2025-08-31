import Image, { type StaticImageData } from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface Props {
  title: string;
  subtitle?: string;
  fontSize: 'regular' | 'large';
  image: StaticImageData;
}

export default function Home(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Navbar />
      <section className="relative w-full min-h-[50vh] h-fit flex flex-col items-center justify-center font-display text-white text-center p-8">
        <Image src={props.image} alt="" fill className="object-cover -z-30" />
        <h1
          className={`${props.fontSize === 'large' ? 'text-8xl' : 'text-7xl'} [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]`}
        >
          {props.title}
        </h1>
        {props.subtitle && (
          <h2 className="text-4xl [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">{props.subtitle}</h2>
        )}
      </section>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
