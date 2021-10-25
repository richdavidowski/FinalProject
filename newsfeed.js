import React from 'react';
import Post from './post';
import DisplayPost from './display-post';


export default function NewsFeed() {
    let Posts = [
        {
            id: 1,
            desc: "They drew first blood",
            photo: "Images/vans.JPG",
            date: "A few seconds ago..",
            userId: 1,
            like: 2,
            comment: 0
        },
        {
            id: 2,
            photo: "Images/eyepatch.jpg",
            date: "4 minutes ago..",
            userId: 2,
            like: 7,
            comment: 2
        },
        {
            id: 3,
            desc: "Get to the choppa!!!",
            photo: "Images/ccr.jpg",
            date: "17 minutes ago..",
            userId: 6,
            like: 19,
            comment: 4
        },
        {
            id: 4,
            desc: "Yippee ki-yay",
            photo: "Images/monarch.JPG",
            date: "49 minutes ago..",
            userId: 3,
            like: 29,
            comment: 3
        },
        {
            id: 5,
            desc: "Nothing like a fresh pressed Canadian Tuxedo for a night on the town",
            photo: "Images/tux.jpg",
            date: "1 hour ago..",
            userId: 7,
            like: 22,
            comment: 9
        },    
    ]    
 
    return(
        <div className="newsfeedContainer">
            <div className="newsfeedWrapper">
                <Post />
                {Posts.map((p) => (
                    <DisplayPost key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}