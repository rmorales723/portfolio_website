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
        Hello World!<br/>
         After a career change into software engineering, I`ve experienced first hand how much work it requires to get involved and be successful.
        Technology leads, Society follows! I love combining the worlds of logic, and creativity to make user friendly websites and applications.
        I`m excited to make the leap and to continue refining my skills with the right company.
        </SectionText>
        <Button onClick={() => window.location = 'https://rob@robgmorales.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;