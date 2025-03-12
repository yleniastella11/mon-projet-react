import React from 'react';
import Projects from './components/Projects.jsx';

function Projects() {
  const projets = [
    { title: 'Fresh Food', description: 'Site avec commande en ligne', technos: 'PHP et MySQL' },
    { title: 'Restaurant Akira', description: 'Site vitrine', technos: 'WordPress' },
    { title: 'Espace bien-être', description: 'Site vitrine pour un praticien de bien-être', technos: 'HTML/CSS' },
  ];
}


const styles = {
  textalign: 'center',
  padding: '1rem',
  color: 'white',
}

export default Projects;