import React from 'react'
import { Tooltip } from 'antd'
import { CommentFieldStyle, CommentSectionStyle } from './style'
import Comment from './Comments'

function PostComment({ postImage }) {
    return (
        <CommentSectionStyle>
            <CommentFieldStyle>
                <div className="image">
                    <img src={postImage} />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Write a comment" />
                    <div className="stickers-container">
                        <Tooltip title="Emojis">
                            <div className="item">
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Attach a photo or video">
                            <div className="item">
                                <i className="fa fa-camera" aria-hidden="true"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Stickers">
                            <div className="item">
                                <i className="fa fa-sticky-note" aria-hidden="true"></i>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </CommentFieldStyle>
            <Comment postImage={postImage} />
            <div className="comment-reply">
                <Comment postImage={postImage} imgSize="24px" />
            </div>
        </CommentSectionStyle>
    )
}

export default PostComment
