import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import LensSearch from './LensSearch';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #202124;
  color: #fff;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lens" element={<LensSearch />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App; 