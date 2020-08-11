import React from 'react';
import LeftTab from './components/LeftTab';
import Contents from './components/Contents';
import PageTemplate from './components/PageTemplate';
import './App.css';

function App() {
  return (
    <PageTemplate>
      <LeftTab />
      <Contents />
    </PageTemplate>
  );
}

export default App;
