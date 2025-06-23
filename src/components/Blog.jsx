import React from 'react';
import fond from '../assets/fond.jpg';
import coder from '../assets/coder.png';
import vendre from '../assets/vendre.png';
import positionner from '../assets/positionner.png';
import coderenresponsive from '../assets/coderenresponsive.png';
import TR from '../assets/TR.png';
import apprendre from '../assets/apprendre.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

const articles = [
  { id: 1, title: 'Coder son site en HTML/CSS', content: 'publié le 22 août 2022', image: coder },
  { id: 2, title: 'Vendre ses produits sur le web', content: 'publié le 20 août 2022', image: vendre },
  { id: 3, title: 'Se positionner sur Google', content: 'publié le 1 août 2022', image: positionner },
  { id: 4, title: 'Coder en responsive design', content: 'publié le 31 juillet 2022', image: coderenresponsive },
  { id: 5, title: 'Techniques de référencement', content: 'publié le 30 juillet 2022', image: TR },
  { id: 6, title: 'Apprendre à coder', content: 'publié le 12 juillet 2022', image: apprendre },
];

const Blog = () => {
  return (
    <section className="blog-section">
      {/* Bandeau image */}
      <div className="banner-image">
        <img src={fond} alt="bandeau" />
      </div>

      {/* Titre */}
      <div className="text-center">
        <h2>MON BLOG</h2>
        <p className="text-muted">Retrouvez ici quelques articles sur le développement web.</p>
        <hr />
      </div>

      {/* Articles */}
      <div className="container mt-5">
        <div className="row">
          {articles.map(article => (
            <div key={article.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img src={article.image} alt={article.title} className="card-img-top" />
                <div className="card-body text-center">
                  <h4 className="card-title text-primary">{article.title}</h4>
                  <p className="card-text text-muted">{article.content}</p>
                  <a href={`/article/${article.id}`} className="btn btn-primary">Lire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;