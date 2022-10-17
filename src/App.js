import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    name: 'Missions',
  },
  {
    id: 2,
    path: '/profile',
    name: 'My Profile',
  },
];

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Nav title="Steam Wishoffers" routes={routes} />
        <Routes>
          <Route path="/" element={<p> Home Page</p>} />
          <Route path="/details" element={<p>Another Page</p>} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
