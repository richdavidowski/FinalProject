import React from 'react';

export default function OnlineUsers({user}) {
    let Users = [
        {
            id: 1,
            profilePicture: "Images/rambo.JPG",
            username: "John Rambo"
        },
        {
            id: 2,
            profilePicture: "Images/snake.JPG",
            username: "Snake Plissken"
        },
        {
            id: 3,
            profilePicture: "Images/diehard.JPG",
            username: "John McClane"
        },
        {
            id: 4,
            profilePicture: "Images/machete.JPG",
            username: "Machete"
        },
        {
            id: 5,
            profilePicture: "Images/hawk.JPG",
            username: "Lincoln Hawk"
        },
        {
            id: 6,
            profilePicture: "Images/dutch.JPG",
            username: "Dutch"
        },
        {
            id: 7,
            profilePicture: "Images/walker.JPG",
            username: "Walker Texas Ranger"
        },
    ]
    return(
        <li className="leftBarFriend">
            <div className="leftBarProfileImgContainer">
                <img className="leftBarProfileImage" src={user.profilePicture} />
                <span className="leftBarOnline"></span>
            </div>
            <span className="leftBarUsername">{user.username}</span>
        </li> 
    )
}