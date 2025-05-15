import React, { useEffect, useState } from "react";

function Card({ title, isCool, actors }) {

    const [count, setCount] = useState(0); 
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        if (hasLiked) {
            console.log(`User has like a movie! ${title}`);
        } else {
            console.log(`User has dislike a movie! ${title}`);
        }
    }, [hasLiked, title]);
    
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
            }}
            onClick={() => setCount(count + 1)}
            >
            <div>{`Movie Title: ${title} - Clicked: ${count} times`}</div>
            <div>{`Cool: ${isCool}`}</div>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? "Like" : "Dislike"}
            </button>

            <div>
                <h3>List of Actors</h3>

                <ul>
                    {actors.map((actor) => (
                        <li key={actor.id}>
                            {actor.firstname + " " + actor.lastname}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Movie() {
    

    return (
        <div className="card-container">
            <Card
                title="Star Wars"
                isCool={true}
                actors={[
                    { id: 1, firstname: "Jessel", lastname: "zapanta" },
                    { id: 2, firstname: "John", lastname: "Doe" },
                    { id: 3, firstname: "Jane", lastname: "Doe" },
                ]}
            />
            <Card
                title="Minecraft"
                isCool={true}
                actors={[
                    { id: 1, firstname: "Jessel", lastname: "zapanta" },
                    { id: 2, firstname: "John", lastname: "Doe" },
                    { id: 3, firstname: "Jane", lastname: "Doe" },
                ]}
            />
        </div>
    );
}

export default Movie;
