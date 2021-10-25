import React from 'react';
import ReactRouter from './react-router';


export default function NavBar() {
    return (
        <div className="navBarContainer">
            <div className="navBarLeft">
                <span className="appName">Rhythm & Shoes</span>
            </div>
            <div className="navBarCenter">
                <div className="searchBar">
                    <input className="searchInput" placeholder="Search" />
                </div>
            </div>
            <div className="navBarRight">
                <div className="navLinks">
                    <ReactRouter />
                </div>
                <div className="navIcons">
                    <div className="navIcon">
                        Friends
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navIcon">
                        Chat
                        <span className="navIconBadge">3</span>
                    </div>
                    <div className="navIcon">
                        Notifications
                        <span className="navIconBadge">1</span>
                    </div>
                </div>
                <img src="Images/Xmas.JPG" className="navProfileImage" />
            </div>
        </div>
    )
}