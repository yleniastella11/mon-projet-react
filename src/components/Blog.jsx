import React from 'react';
import fond from '../assets/fond.png';
import './Blog.css';

const articles = [
    { id: 1, title: 'Coder son site en HTML/CSS', content: 'publié le 22 août 2022' },
    { id: 2, title: 'Vendre ses produits sur le web', content: 'publié le 20 août 2022' },
    { id: 3, title: 'Se positionner sur Google', content: 'publié le 1 août 2022' },
    { id: 4, title: 'Coder en responsive design', content: 'publié le 31 juillet 2022' },
    { id: 5, title: 'Techniques de référencement', content: 'publié le 30 juillet 2022' },
    { id: 6, title: 'Apprendre à coder', content: 'publié le 12 juillet 2022' },
];

const Blog = () => {
    return (
        <div className="blog-list">
            <h2>Retrouvez ici quelques articles sur le développement web.</h2>
            <div className="articles-container">
                {articles.map(article => (
                    <div key={article.id} className="blog-item">
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