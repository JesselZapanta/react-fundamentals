import React from 'react'

export default function NameList() {

    const names = ['jessel', 'zapanta', 'meldhee', 'claire', 'kaamino'];

    return (
        <div>
            {names.map((name) => (
                <h1 key={name}>{name}</h1>
            ))}
        </div>
    );
}
