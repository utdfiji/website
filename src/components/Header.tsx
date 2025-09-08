import Image, { type StaticImageData } from 'next/image';
import React from 'react';

export type HeaderProps = {
  pretitle?: string;
  title: string;
  subtitle?: string;
  fontSize?: 'regular' | 'large';
  image: StaticImageData;
  alt: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="relative w-full min-h-[50vh] h-fit flex flex-col items-center justify-center font-display text-white text-center p-8">
      <Image src={props.image} alt={props.alt} fill className="object-cover -z-30" />
      {props.pretitle && (
        <p className="text-2xl text-shadow-[0_0_4px_rgb(0_0_0_/_1)]">{props.pretitle}</p>
      )}
      <h1
        className={`${props.fontSize === 'large' ? 'text-7xl md:text-8xl' : 'text-6xl md:text-7xl'} text-shadow-[0_0_16px_rgb(0_0_0_/_1)]`}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <h2 className="text-4xl text-shadow-[0_0_8px_rgb(0_0_0_/_1)]">{props.subtitle}</h2>
      )}
    </header>
  );
}
