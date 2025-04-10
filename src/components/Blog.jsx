import React from 'react';
import coder from '../assets/coder.png';
import vendre from '../assets/vendre.png';
import positionner from '../assets/positionner.png';
import coderenresponsive from '../assets/coderenresponsive.png';
import TR from '../assets/TR.png';
import apprendre from '../assets/apprendre.png';

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
        <div className="blog-list">
            <h2>Retrouvez ici quelques articles sur le développement web.</h2>
            <div className="articles-container">
                {articles.map(article => (
                    <div key={article.id} className="blog-item">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <a href={`/article/${article.id}`} className="lire">Lire</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;