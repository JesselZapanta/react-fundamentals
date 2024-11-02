import axios from "axios";
import { useState } from "react";

function Post() {

    const [ userId, setUserId ] = useState(null);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ loading, setLoading] = useState(false);

    const [response, setResponse] = useState(null);
    
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     axios.post("https://jsonplaceholder.typicode.com/posts", {
    //         userId,
    //         title,
    //         body,
    //     })
    //     .then((res) => {
    //         setResponse(res.data);
    //         setUserId("");
    //         setTitle("");
    //         setBody("");
    //         setLoading(false);
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    //using async
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    userId,
                    title,
                    body,
                }
            );
            setResponse(res.data);
            setUserId("");
            setTitle("");
            setBody("");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    } 

    return (
        <div className="max-w-md mx-auto m-6 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Create a New Post
            </h1>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        UserId
                    </label>
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Body
                    </label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200">
                    {loading ? "Loading" : "Submit Post"}
                </button>
            </form>

            {/* Display the response data */}
            {response && (
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h2 className="text-lg font-bold">Post Created</h2>
                    <p>
                        <strong>ID:</strong> {response.userId}
                    </p>
                    <p>
                        <strong>Title:</strong> {response.title}
                    </p>
                    <p>
                        <strong>Body:</strong> {response.body}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Post