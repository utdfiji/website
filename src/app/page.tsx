import Image from 'next/image';
import React from 'react';

import Crest from '@/../public/crest.png';
import CarBash from '@/../public/headers/utd.jpg';
import Instagram from '@/components/Instagram';
import Page from '@/components/Page';
import Section from '@/components/Section';

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
    title: 'Friendship',
    content: (
      <>
        We Are United By <b>Friendship</b>. It is the basis of our brotherhood. Because of it, we
        accomplish far more than we do as individuals. <b>Friendship is the sweetest influence.</b>
      </>
    ),
  },
  {
    title: 'Knowledge',
    content: (
      <>
        We Promote the Pursuit of <b>Knowledge</b>. It is the key to a fuller, richer life. We gain
        it through education, the harmonious development of the powers of the individual.
      </>
    ),
  },
  {
    title: 'Service',
    content: (
      <>
        We Encourage <b>Service</b>. We have the ability, the opportunity and the duty to serve our
        fellow human beings. Our reward is the satisfaction that comes from serving.
      </>
    ),
  },
  {
    title: 'Morality',
    content: (
      <>
        We Believe in <b>Morality</b>. As gentlemen of quality, we must do what is right as
        individuals and as a group. Moral behavior is the basis of society&apos;s existence.
      </>
    ),
  },
  {
    title: 'Excellence',
    content: (
      <>
        We Strive for <b>Excellence</b>. It is attained only when we fulfill our potential. Mankind
        benefits when each of us becomes all that we can.
      </>
    ),
  },
];

export default function Home() {
  return (
    <Page title="Phi Gamma Delta" subtitle="Tau Delta Chapter" fontSize="large" image={CarBash}>
      <Section className="flex gap-8 items-center">
        <Image src={Crest} alt="Crest" width={100} height={100} className="min-h-64 w-auto" />
        <div className="flex flex-col gap-4">
          <p>
            Phi Gamma Delta (FIJI), founded in 1848, is a social fraternity with more than 144
            active chapters and 10 colonies across the United States and Canada.
          </p>
          <p>
            The Tau Delta chapter of FIJI was chartered in 2012 at The University of Texas at
            Dallas.
          </p>
        </div>
      </Section>
      <Section className="flex flex-wrap gap-4 justify-evenly">
        {missionVision.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-3xl font-bold text-yellow">{item.title}</h3>
            <p className="text-xl">{item.content}</p>
          </div>
        ))}
      </Section>
      <Section className="flex flex-wrap gap-4 justify-evenly">
        {values.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-2xl font-bold text-yellow">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </Section>
      <Section className="flex flex-col gap-4 items-center">
        <Instagram />
      </Section>
    </Page>
  );
}
