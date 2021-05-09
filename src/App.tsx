// import ArchiveNav from './components/ArchiveNav';
import ArchiveFooter from './components/ArchiveFooter/';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { App as StyledApp } from './App.styled';

function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Home />
        <ArchiveFooter />
      </Router>
    </StyledApp>
  );
}

export default App;
