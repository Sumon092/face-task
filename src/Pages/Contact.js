import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=500')
            .then(res => res.json())
            .then(data => {
                console.log(data.results.length);
                setUser(data)
            })
    }, [])
    return (
        <div>
            <h2>user {user.results.length}</h2>
        </div>
    );
};

export default Contact;