import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';
import Team from './components/Team';
import Hero from './components/Hero';


const App = () => (
  <div>
    <Normalize/>
    <GlobalStyles/>
    <Hero/>
    <Team/>
  </div>
);

export default App;
