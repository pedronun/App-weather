import { Image } from 'react-native';
import Temperature from '../../components/Temperature/Temperature';
import { Container } from './Home.styles';

import React from 'react';
import BottomModal from '../../components/BottomModal/BottomModal';

const Home = () => {
  const [openBottomModal, setOpenBottomModal] = React.useState(false);

  return (
    <Container source={require('../../assets/img/home-background.png')}>
      <Temperature openBottomModal={openBottomModal} />
      <Image source={require('../../assets/img/house.png')} />
      <BottomModal setOpenBottomModal={setOpenBottomModal} />
    </Container>
  );
};

export default Home;