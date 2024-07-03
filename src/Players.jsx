import React, { useState } from 'react';

const Players = () => {

    const [count, setCount] = useState(0);
    const addPlayer = () =>{
        const addPlayer = count + 1;
        setCount(addPlayer);
    }

    const removePlayer = () =>{
        const removePlayer = count-1;
        setCount(removePlayer)
    }
    return (
        <div>
            <h2>Players: {count}</h2><br />
            <button onClick={addPlayer}>Add player</button><br />
            <button onClick={removePlayer}>Remove player</button>
        </div>
    );
};

export default Players;