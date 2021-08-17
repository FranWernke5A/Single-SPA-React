import React, { useState } from 'react';

const App = ({ name }) => {
    const [ counter, updateCounter ] = useState(0);

    const [ inputValue, updateInputValue ] = useState(1);

    const handleChange = delta => {
        updateCounter(oldCounter => oldCounter + delta);
    };

    const handleInputChange = value => {
        updateInputValue(oldInputValue => oldInputValue = parseInt(value.target.value));
    };

    return (
        <>
            <h1>{name}</h1>
            <h2>Counter: {counter}</h2>
            
            <button onClick={() => handleChange(inputValue)}> Add </button>
            <button onClick={() => handleChange(-inputValue)}> Subtract </button> 
            <input type="number" value={inputValue} onChange={handleInputChange}/>
        </>
    );
} 

export default App;