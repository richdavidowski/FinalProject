import { React, useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';

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

export default function Post({user}) {
    const desc = useRef();
    const [fill, setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user.id,
            desc: desc.current.value,
        }

        try{
            Posts.push(newPost)
        }   catch(err){

        }
    }

    return (
        <div className="post">
            <Card className="card bg-secondary text-white">
                <Card.Header className="postTop">
                    <img className="postProfileImage" src="Images/Xmas.JPG" alt="" />
                    <span className="postHeader">Speak Your Mind</span>
                </Card.Header>
                <Card.Body className="postBody">
                    <input 
                        placeholder="What's the haps?"
                        className="longInput postInput"
                        ref={desc}
                    />
                </Card.Body>
                <Card.Footer className="postBottom">
                    <form onSubmit={submitHandler}>
                        <div className="postOptions">
                            <label htmlFor="file" className="postOption">
                                <span className="postOptionText">Photo or Audio</span>
                                <input style={{ display: "none" }} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
                            </label>
                        </div>
                        <button className="btn btn-secondary postButton" type="submit">Post</button>
                    </form>    
                </Card.Footer>
            </Card>
        </div>
    )
}