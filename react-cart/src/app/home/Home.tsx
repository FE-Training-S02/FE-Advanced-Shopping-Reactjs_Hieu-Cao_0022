import React from 'react';
import Footer from '../shared/components/layout/footer/Footer';

import Header from '../shared/components/layout/header/Header';
import ListProducts from '../shared/components/partials/ListProducts';
import Banner from './partials/Banner';
import Collections from './partials/Collections';
import Contact from './partials/Contact';
import Reasons from './partials/Reasons';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Collections />
        <ListProducts titleLeft={true} />
        <Reasons />
        <ListProducts titleLeft={false} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home;
