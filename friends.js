import React from 'react';


export default function Friends({user}) {

    return (
        <li className="friendList">
            <img className="friendImage" src={user.profilePicture} />
            <span className="friendName">{user.username}</span>
        </li>
    );
}