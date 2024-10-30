import React from 'react'

export default function InlineCss() {
    const heading = {
        fontSize:  '72px',
    }

    const color = {
        color: "green",
    };

    return (
        <div style={(heading, color)}>
            <h1>Hello World!</h1>
        </div>
    );
}
