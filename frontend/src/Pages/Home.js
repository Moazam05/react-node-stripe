import React from 'react';

import Layout from '../components/Shared/Layout';
import Hero from '../components/Hero/Hero';
import MainSection from '../components/MainSection/MainSection';
import FeaturedCollection from '../components/FeaturedCollection/FeaturedCollection';

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </React.Fragment>
  );
};

export default Home;
