import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';
import Team from './components/Team';

const App = () => (
  <div>
    <Normalize />
    <GlobalStyles />
    <h1>WWCode Recife in the Hacktoberfest 2020 </h1>
    <Team />
  </div>
);

export default App;
