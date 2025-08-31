import React from 'react';

import Diamond from '@/../public/headers/pig-dinner.jpg';
import Page from '@/components/Page';
import Section from '@/components/Section';

export default function Recruitment() {
  return (
    <Page title="Recruitment" image={Diamond}>
      <Section className="flex flex-col gap-4">
        <p>
          To be a member of Phi Gamma Delta is to become a Brother for Life. We at the Tau Delta
          Chapter of Phi Gamma Delta take great pride and put forth a tireless effort to discover,
          recruit, and develop the best The University of Texas at Dallas has to offer.
        </p>
        <p>
          The future of our fraternity is determined by the quality of men we recruit each year.
          This is why we search for scholarly men who represent our five values of Friendship,
          Knowledge, Service, Morality, and Excellence; who understand that their first
          responsibility is their academics, and do not underestimate the power of giving back.
        </p>
        <p>
          We begin each semester with Recruitment, or Rush, seeking out men who are already
          interested in learning more about Greek Life at UTD. For the following weeks we focus our
          efforts on discovering new friends who we believe will not only enrich our fraternity but
          who will also benefit from becoming a Brother.
        </p>
      </Section>
    </Page>
  );
}
