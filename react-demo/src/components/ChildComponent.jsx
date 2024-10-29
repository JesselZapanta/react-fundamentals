import React from 'react'

export default function ChildComponent({ greetParent }) {
    return (
        <div>
            <button onClick={() => greetParent("jessel")}>Green Parent</button>
        </div>
    );
}
