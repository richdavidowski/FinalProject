import { React, useState} from 'react';

export default function LikeButton({post}) {

    let Posts = [
        {
            id: 1,
            desc: "They drew first blood",
            photo: "",
            date: "A few seconds ago..",
            userId: 1,
            like: 2,
            comment: 0
        },
        {
            id: 2,
            photo: "",
            date: "4 minutes ago..",
            userId: 2,
            like: 7,
            comment: 2
        },
        {
            id: 3,
            desc: "Get to the choppa!!!",
            photo: "",
            date: "17 minutes ago..",
            userId: 6,
            like: 19,
            comment: 4
        },
        {
            id: 4,
            desc: "Yippee ki-yay",
            photo: "",
            date: "49 minutes ago..",
            userId: 3,
            like: 29,
            comment: 3
        },
        {
            id: 5,
            desc: "Nothing like a fresh pressed Canadian Tuxedo for a night on the town",
            photo: "",
            date: "1 hour ago..",
            userId: 7,
            like: 22,
            comment: 9
        },    
    ]

    // const [like, setLike] = useState(post.like)
    // const [isLiked, setIsLiked] = useState(false)

    // const likeHandler = () => {
    //     setLike(isLiked ? like-1 : like+1) 
    // }

    return (
        <div>
            <button className='btn btn-primary' >Like</button>
        </div>
    )
}

