import Image from 'next/image';
import React from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const missionVision = [
  {
    title: 'Mission',
    content:
      'Phi Gamma Delta unites men in enduring friendships, stimulates the pursuit of knowledge, and builds courageous leaders who serve the world with the best that is in them.',
  },
  {
    title: 'Vision',
    content:
      'To be an active vital force of men who courageously live our values and make a positive impact on college and community.',
  },
];

const values = [
  {
    title: 'We Are United By Friendship',
    content:
      'It is the basis of our brotherhood. Because of it, we accomplish far more than we do as individuals. Friendship is the sweetest influence.',
  },
  {
    title: 'We Promote the Pursuit of Knowledge',
    content:
      'It is the key to a fuller, richer life. We gain it through education, the harmonious development of the powers of the individual.',
  },
  {
    title: 'We Encourage Service',
    content:
      'We have the ability, the opportunity and the duty to serve our fellow human beings. Our reward is the satisfaction that comes from serving.',
  },
  {
    title: 'We Believe in Morality',
    content:
      "As gentlemen of quality, we must do what is right as individuals and as a group. Moral behavior is the basis of society's existence.",
  },
  {
    title: 'We Strive for Excellence',
    content:
      'It is attained only when we fulfill our potential. Mankind benefits when each of us becomes all that we can.',
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center font-display text-white">
        <Image src="/diamond.png" alt="" fill className="object-cover -z-30" />
        <h1 className="text-8xl [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">Phi Gamma Delta</h1>
        <h2 className="text-4xl [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">Tau Delta Chapter</h2>
      </section>
      <section className="w-full flex flex-wrap gap-4 justify-evenly xl:pt-32 px-8 md:px-32 xl:px-64 my-16">
        {missionVision.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-2xl font-bold text-yellow">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
      <section className="w-full flex flex-wrap gap-4 justify-evenly xl:pt-32 px-8 md:px-32 xl:px-64 my-16">
        {values.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-2xl text-yellow">
              {item.title.split(' ').slice(0, -1).join(' ') + ' '}
              <b>{item.title.split(' ').slice(-1)}</b>
            </h3>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
