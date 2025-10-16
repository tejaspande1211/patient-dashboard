import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import PatientsPage from './pages/PatientsPage';
import AboutPage from './pages/About';

function App() {
  return (
    <Router>
      {}
      <div className="container-fluid px-0">
        <Navbar />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
