import React from 'react'
import { useState } from 'react'

export default function Message() {

    const [message, setMessage] = useState("Welcome, Visitors");

    const handleClick = () => {
        setMessage('Thank you!')
    }

    return (
        <>
            <div>
                <h1>{message}</h1>
            </div>
            <button onClick={handleClick}>
                Click Me
            </button>
        </>
    );
}
