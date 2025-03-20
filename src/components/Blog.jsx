import React from 'react';

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
        <div style={{ color: '#444', width: '50%', margin: 'auto', display: 'flex', flexDirection: 'column', padding: '5rem', backgroundColor: '#EEE', }}>
            <h1>Mon Blog</h1>
            <h2>Retrouvez ici quelques articles sur le développement web.</h2>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;