import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
function UserName(props) {
    const [name, setName] = useState('empty');
    const fetchName = useCallback(() => {
        axios.get('/getSecondName').then(resp => {
            const { status, data } = resp;
            if (status === 200) {
                if (data.code === 'ACK') {
                    setName(data.data);
                }
            }
        });
    }, []);
    useEffect(() => {
        axios.get('/getUserName').then(resp => {
            const { status, data } = resp;
            if (status === 200) {
                if (data.code === 'ACK') {
                    setName(data.data);
                }
            }

        }, (e) => { console.warn(e) });
    }, []);
    return (
        <>
            <div data-testid="user-name">{name}</div>
            <span data-testid="btn-fetch" onClick={fetchName}>fetch name</span>
        </>
    )
}
export default UserName;