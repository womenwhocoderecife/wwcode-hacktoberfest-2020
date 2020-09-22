import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';
import Team from './components/Team';
import Hero from './components/Hero';
import WomenWhoCode from './components/WomenWhoCode';



const App = () => (
  <div>
    <Normalize/>
    <GlobalStyles/>
    <Hero/>
    <WomenWhoCode/>
    <Team/>
  </div>
);

export default App;
