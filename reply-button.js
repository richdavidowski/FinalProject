import React from 'react';
import CommentInput from './comment-input';

export default class ReplyButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return (
            <div>
                <CommentInput />
            </div>
        )
    }

    render() {
        return (
            <div className="replyButtonDiv">
                <button className='btn btn-warning replyButton'
                onClick={this.handleClick}
                >
            Reply</button>
            </div>
        )
    }
}