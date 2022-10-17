import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router className="App">
        {/* <Nav title="Global Currency Converter" /> */}
        <Routes>
          <Route path="/" element={<p> Home Page</p>} />
          <Route path="/details" element={<p>Another Page</p>} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
