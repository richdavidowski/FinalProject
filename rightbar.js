import React from 'react';
import Friends from './friends';
 
export default function RightBar() {
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
    return (
        <div className="rightBarContainer">
            <div className="adContainer">
                <img className="adImage" src="Images/acc.JPG" />
            </div>
            <div className="yourFriends">
                <h4 className="yourFriendsTitle">Your Crew</h4>
                    <div className="friendDisplay">
                    {Users.map(u => (
                        <Friends key={u.id} user={u}/>
                    ))}
                    </div>
            </div>
        </div>
    )
}