import Image, { type StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  fontSize: 'regular' | 'large';
  image: StaticImageData;
}

export default function Header(props: React.PropsWithChildren<Props>) {
  return (
    <section className="relative w-full min-h-[50vh] h-fit flex flex-col items-center justify-center font-display text-white text-center p-8">
      <Image src={props.image} alt="" fill className="object-cover -z-30" />
      <h1
        className={`${props.fontSize === 'large' ? 'text-8xl' : 'text-7xl'} [text-shadow:_0_0_16px_rgb(0_0_0_/_1)]`}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <h2 className="text-4xl [text-shadow:_0_0_16px_rgb(0_0_0_/_1)]">{props.subtitle}</h2>
      )}
    </section>
  );
}
