import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Main from './components/main.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';


const App = () => {
  return (
      <div>
          <Header />
          <Footer />
          <Main />
          <Projects />
          <Contact />
          <BlogPost />
      </div>
  );
};

import React, { useState } from 'react';
import BlogPost from './components/BlogPost.jsx';

const App = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Mon premier blog', content: 'Ceci est le contenu de mon premier blog.' },
        { id: 2, title: 'Mon deuxième blog', content: 'Ceci est le contenu de mon deuxième blog.' },
        { id: 3, title: 'Mon troisième blog', content: 'Ceci est le contenu de mon troisième blog.' },
        { id: 4, title: 'Mon quatrième blog', content: 'Ceci est le contenu de mon quatrième blog.' },
        { id: 5, title: 'Mon cinquième blog', content: 'Ceci est le contenu de mon cinquième blog.' },
        { id: 6, title: 'Mon sixième blog', content: 'Ceci est le contenu de mon sixième blog.' },
    ]);

    return (
        <div>
            {blogs.map(blog => (
                <BlogPost key={blog.id} title={blog.title} content={blog.content} />
            ))}
        </div>
    );
};

export default App;
