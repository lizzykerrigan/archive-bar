import React from 'react';
import ArchiveNav from './components/ArchiveNav';
import Home from './pages/Home';
import { ArchiveFooter } from './components/ArchiveFooter';

function App() {
  return (
    <div className="App">
      <ArchiveNav />
      <Home />
      <ArchiveFooter />
    </div>
  );
}

export default App;
