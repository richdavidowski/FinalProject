import React from 'react';

export default class CommentInput extends React.Component {
    render() {
        return(
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modeal-header'>
                        <h3>Add Comment</h3>
                    </div>
                    <div className='modal-body'>
                        <form>
                            <input type='text' id='comment-text'/>
                        </form>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-primary'>Submit Comment</button>
                    </div>
                </div>
            </div>
        )
    }
}