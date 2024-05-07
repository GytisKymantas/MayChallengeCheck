import React from 'react';
import { Box } from './components/Box';
import { Flex } from './components/Flex';
import { InformationForms } from './components/InformationForms/InformationForms';
import { Main } from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import { BenefitsSection } from './components/ProductSummary/elements/BenefitsSection';
import { ProductSummary } from './components/ProductSummary/ProductSummary';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
