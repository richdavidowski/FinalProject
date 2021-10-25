import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import LikeButton from './like-button';
import ReplyButton from './reply-button';

export default function DisplayPost({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler =() => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

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
        <div className="displayPosts">
            <Card className="card bg-secondary text-white postCard">
                <Card.Header className="displayPostHeader">
                    <div className="row">
                    <div className="col-sm-5">
                        <img 
                            className="displayPostProfileImg"
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />
                        <span className="displayPostUsername">
                            {Users.filter((u) => u.id === post.userId)[0].username}
                            </span>
                    </div>
                    <div className="col-sm-5 postDate">
                        <span className="displayPostDate">{post.date}</span>
                    </div>
                    </div>
                    <div className="postImage">
                        <img className="card-img-top displayPostImage" src={post.photo} />
                    </div>
                </Card.Header>
                <Card.Body className="cardBody">
                    <div>
                        <p className="card-text displayPostText">{post?.desc}</p>
                    </div>
                </Card.Body>
                <Card.Footer className="displayPostBottom">
                    <div className="likeDiv" onClick={likeHandler}>
                    <LikeButton />
                    <span className="likeCounter">{like} Likes</span>
                    <ReplyButton />
                    <span className="commentCount">{post.comment} Comments</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    )
}