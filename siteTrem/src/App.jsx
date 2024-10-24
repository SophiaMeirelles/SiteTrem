import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sobre from './pages/Sobre/Sobre';
import Motorista from './pages/Motorista';
import AppPage from './pages/AppPage';
import Contato from './pages/Contato';
import TremHome from './pages/Home/Home';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<TremHome />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/motorista" element={<Motorista />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/contato" element={<Contato />} />
    </Routes>
    <Footer />
</Router>

  );
}

export default App;
