import React from 'react';
import Header from './header';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
      <div>
          <h1>Formulaire de Contact</h1>
          <ContactForm />
      </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;