import { useEffect, useState } from 'react'
import axios from 'axios';

function GetPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
                // console.log(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen first-line:p-8">
            <h1 className="text-2xl font-bold text-center mb-6">Posts</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="p-4 bg-white rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetPost;