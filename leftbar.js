import React from 'react';
import OnlineUser from './online-users';

export default function LeftBar() {
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
        <div className="left-bar">
            <div className="leftBarWrapper">
                <div className="leftBarContainer">
                    <div className="droppedAlert">
                        <img className="droppedImage" src="Images/bag.png" />
                        <span className="todayDrops">
                            <b>Nike Air Trainer 3 Saquon Barkley</b> and <b>1 Album</b> dropped today
                        </span>
                    </div>
                </div>
                <img className="leftBarAd" src="Images/promineo.JPG" />
                    <div className="onlineFriendsContainer">
                    <h4 className="onlineFriends">Online SneakerHeads</h4>
                    <ul className="onlineFriendList">
                        {Users.map(u => (
                            <OnlineUser key={u.id} user={u} />
                        ))}
                    </ul>
                    </div>
            </div>
        </div>
    )
}