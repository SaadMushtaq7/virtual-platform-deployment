import { Tooltip } from 'antd'
import React from 'react'
import { CommentStyle, ReactionContainer } from './style'

type commentProps = {
    postImage: string
    imgSize?: string
}

function Comment(props: commentProps) {
    const { postImage, imgSize } = props
    const reaction = ['like', 'heart', 'care', 'haha', 'wow', 'angry']
    const likeImagePath = `/images/reactions/like.png`
    const imagePath = `/images/reactions/heart.png`
    const ReactionImage = (imagePath) => (
        <Tooltip title={imagePath.toUpperCase()}>
            <img src={`/images/reactions/${imagePath}.png`} />
        </Tooltip>
    )
    return (
        <CommentStyle imgSize={imgSize}>
            <div>
                <div className="image">
                    <img src={postImage} />
                </div>
            </div>
            <div className="comment-container">
                <div className="comment">
                    <div className="user-name">Muhammad Anees Anwar</div>
                    <div className="comment-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</div>
                    <div className="reactions">
                        <div className="imgs">
                            <img src={likeImagePath} />
                            <img src={imagePath} />
                        </div>
                        <div className="count">12</div>
                    </div>
                </div>
                <div className="comment-details">
                    <div className="details">
                        <div className="like">
                            <div className="item like-comment">Like</div>
                            <ReactionContainer className="reactions-container">
                                <div className="container">
                                    {reaction.map((img, index) => (
                                        <div className="reaction-image" key={index}>
                                            {ReactionImage(img)}
                                        </div>
                                    ))}
                                </div>
                            </ReactionContainer>
                        </div>
                        <div className="item reply">Reply</div>
                        <div className="item time">1d</div>
                    </div>
                </div>
            </div>
            <div className="report">
                <div className="reportIcon">
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
            </div>
        </CommentStyle>
    )
}

export default Comment
