import React from 'react'
import NavBar from '../Components/navbar';
import LeftBar from '../Components/leftbar';
import RightBar from '../Components/rightbar';
import NewsFeed from '../Components/newsfeed';
import ProfileLeftBar from '../Components/profile-left-bar';

export default function Profile() {
    return (
        <>
        <NavBar />
        <div className="profile">
            <div className="profileLeft">
                <div className="profileLeftTop">
                    <div className="profileCover">
                        <img className="profileCoverImage" src="Images/sys.JPG" />
                        <img className="profilePicture" src="Images/Xmas.JPG" />
                    </div>
                    <div className="profileInfo">
                        <h3 className="profileInfoName">Richie Davidowski</h3>
                        <span className="profileInfoBio">What's up Nerds?</span>
                    </div>
                </div>
                <div className="profileLeftBottom">
                    <ProfileLeftBar />
                    <NewsFeed />
                </div>
                </div>  
                    <RightBar />
            </div>
        </>
    )

}