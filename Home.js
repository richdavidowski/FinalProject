import React from 'react';
import NavBar from '../Components/navbar';
import LeftBar from '../Components/leftbar';
import RightBar from '../Components/rightbar';
import NewsFeed from '../Components/newsfeed';

export default function Home() {
    return (
        <>
        <NavBar />
        <div className="homeContainer">
            <LeftBar />
            <NewsFeed />
            <RightBar />  
        </div>
        </>
    );
}