import React, { useState } from 'react'

export default function PostForm() {


    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    const [userId, setUserId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        type="text"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="userId">userId</label>
                    <input
                        type="number"
                        name="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
