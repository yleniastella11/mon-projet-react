import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Services from './components/Services';
import Footer from './components/Footer'; 
import GitHubProfile from './components/GitHubProfile'; 

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/githubprofile" element={<GitHubProfile />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;



