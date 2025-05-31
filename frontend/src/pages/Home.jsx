import React from 'react';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu />
      <TopDoctors/>
      <Banner/>
    </div>
  );
};

export default Home;