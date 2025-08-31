import React from 'react';

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
    <Page title="Phi Gamma Delta" subtitle="Tau Delta Chapter" fontSize="large" image={CarBash}>
      <Section className="flex flex-wrap gap-4 justify-evenly">
        {missionVision.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-2xl font-bold text-yellow">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </Section>
      <Section className="flex flex-wrap gap-4 justify-evenly">
        {values.map((item) => (
          <div key={item.title} className="max-w-64 text-center">
            <h3 className="font-display text-2xl text-yellow">
              {item.title.split(' ').slice(0, -1).join(' ') + ' '}
              <b>{item.title.split(' ').slice(-1)}</b>
            </h3>
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
