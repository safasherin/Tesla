import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home.jsx';


function App() {
  return (
    <Router >
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
