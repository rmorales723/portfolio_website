import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a software developer from New York City, and I recently graduated from the Flatiron School for computer engineering.
        I also have over 20 years in the fitness industry, coupled with owning my own gyms gives me a strong entrepreneurial, managerial, and customer service skills.
        These attributes, in conjunction with a year at Flatiron bootcamp building apps, make me confident of the value I will bring to your company.
        </SectionText>
        <Button onClick={() => window.location = 'https://robmorales723@gmail.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;