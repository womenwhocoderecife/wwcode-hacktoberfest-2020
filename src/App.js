import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';

import HacktoberFest from './components/Hacktoberfest';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import WomenWhoCode from './components/WomenWhoCode';
import WWCodeRecife from './components/WWCodeRecife';
import Footer from './components/Footer';

const App = () => (
  <>
    <Normalize />
    <GlobalStyles />

    <Header />
    <Hero />
    <WomenWhoCode />
    <WWCodeRecife />
    <Team />
    <HacktoberFest />
    <Footer />
  </>
);

export default App;
