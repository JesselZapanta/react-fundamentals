import React from 'react'

export default function Greet(props) {
    return (
        <>
            <div>
                <h1>
                    Hello, {props.name} {props.lastname}
                </h1>
            </div>
            {props.children}
        </>
    );
}
