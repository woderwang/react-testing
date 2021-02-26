import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Avatar() {
    const [avatarValue, setAvatarValue] = useState('NONE');
    useEffect(() => {
        setTimeout(() => {
            setAvatarValue('Avatar')
        }, 1000);
    }, []);
    return <div data-testid="avatar">{avatarValue}</div>;
}
export default Avatar;