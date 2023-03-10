import { Image } from 'react-native';
import Temperature from '../../components/Temperature/Temperature';
import { Container } from './Home.styles';

import React from 'react';
import BottomModal from '../../components/BottomModal/BottomModal';

const Home = () => {
  return (
    <Container source={require('../../assets/img/home-background.png')}>
      <Temperature />
      <Image source={require('../../assets/img/house.png')} />
      <BottomModal />
    </Container>
  );
};

export default Home;