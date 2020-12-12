import React, { useState, useEffect } from 'react';

import PostsList from './postsList';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoadinng, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
                setLoading(false);
            })
    }, []);

    return (
        <div className="mt-5">
            <h1>Posts</h1>
            
            {isLoadinng
                ? <span>Loading...</span>
                : <PostsList data={posts} />
            }
        </div>
    );
}

export default Posts;