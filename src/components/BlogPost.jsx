import React from 'react';

function Blog() {
    const blog = [
        { title : 'Coder son site en HTML/CSS', time: 22/8/2022 },
        { title: 'Vendre ses produits sur le web', time: 20/8/2022 },
        { title: 'Se positionner sur Google', time: 1/8/2022 },
        { title: 'Coder en responsive design', time: 31/7/2022 },
        { title: 'Techniques de référencement', time: 30/7/2022 },
        { title: 'Apprendre à coder', time: 12/7/2022 },
    ]
}

return (
    <div>
        {posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        ))}
    </div>
);
    



export default Blog;