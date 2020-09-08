import React from 'react';
import MobileHeader from '../../components/MobileHeader';
import DesktopHeader from '../../components/DesktopHeader';
import LeftColumn from '../../components/LeftColumn';
import MiddleColumn from '../../components/MiddleColumn';
import RightColumn from '../../components/RightColumn';
import {Container} from './styles';

const Homepage: React.FC = () => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Homepage;
