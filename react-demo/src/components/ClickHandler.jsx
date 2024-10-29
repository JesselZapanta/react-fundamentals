import React, { useState } from 'react'

export default function ClickHandler() {

    const customIncrement = (num, e) => {
    const parsedNumber = +num;
        setCount(count + parsedNumber);
        console.log(e)
    }

    const [ count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handledecrement = () => {
        setCount(count - 1);
    }

    const [ name, setName ] = useState();

    const handleNameChange = (name) => {
        setName(name);
    }

    const [ number, setNumber ] = useState(0);


    return (
        <div>
            <h1>Counter: {count}</h1>
            <h2>Hi, my name is {name}</h2>
            <button onClick={handledecrement}>Counter-</button>
            <button onClick={handleIncrement}>Counter+</button>
            <div>
                Custom Counter
                <input type="number" onChange={(e) => setNumber(e.target.value)} />
                <button onClick={(e) => customIncrement(number, e)}>
                    Click Me
                </button>
            </div>

            <input type="text" onChange={(e) => handleNameChange(e.target.value)} />
        </div>
    );
}
