import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Services from './components/Services';
import InfoPage from './components/InfoPage';
import Footer from './components/footer'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;



