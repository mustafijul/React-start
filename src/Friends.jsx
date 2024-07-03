import React, { useEffect, useState } from 'react';

const Friends = () => {

    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>Friedns Nmber: {friends.length}</h2>
        </div>
    );
};

export default Friends;