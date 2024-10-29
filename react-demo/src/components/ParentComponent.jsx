import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {

    const greetParent = (name) => {
        alert("Hello " + name);
    };


    return (
        <ChildComponent greetParent={greetParent} />
    );
}
