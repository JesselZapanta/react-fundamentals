import React, { useEffect, useState } from 'react'

export default function PostList() {

    const [ posts, setPosts ] = useState([]);
    
    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch((err) => {
                    console.log(err)
                })
    }, [])

    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.name}</p>
                        <p>{post.email}</p>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
