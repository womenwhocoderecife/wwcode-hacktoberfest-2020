import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';
import Hero from './components/Hero';
import WomenWhoCode from './components/WomenWhoCode';
import WWCodeRecife from './components/WWCodeRecife';
import Team from './components/Team';
import Hacktoberfest from './components/Hacktoberfest';

const App = () => (
  <>
    <Normalize/>
    <GlobalStyles/>
    <Hero/>
    <WomenWhoCode/>
    <WWCodeRecife/>
    <Team/>
    <Hacktoberfest/>
  </>
);

export default App;
