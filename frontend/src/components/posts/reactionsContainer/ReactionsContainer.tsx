import React, { useState } from 'react'
import { Tooltip } from 'antd'
import { ReactionContainer, ReactionsContainerStyle } from './style'

type reactionsContainerProps = {
    data: { reactions: string[]; reactionsCount: number; commentsCount: number; sharesCount: number }
}

function ReactionsContainer(props: reactionsContainerProps) {
    const { data } = props
    const [likesCount, setLikesCount] = useState(data.reactionsCount)
    const [reactionIcons, setReactionIcons] = useState(data.reactions)
    const [shares, setShares] = useState(data.sharesCount)
    const [isReacted, setIsReacted] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const [reactedIcon, setReactedIcon] = useState('')
    const reaction = ['like', 'heart', 'care', 'sad', 'haha', 'wow', 'angry']

    const userReaction = (img?: string) => {
        let icon = img ? img : 'like'
        !isReacted ? setLikesCount(likesCount + 1) : !img ? setLikesCount(likesCount - 1) : null

        if (img) {
            if (!reactionIcons.includes(icon)) {
                setReactionIcons((imgs) => [...imgs, icon])
            }
        } else {
            if (!reactionIcons.includes('like') && !isReacted) {
                setReactionIcons((imgs) => [...imgs, 'like'])
            }
        }

        setReactedIcon(icon)
        setIsReacted(img ? true : !isReacted)
        setShowModal(false)
        setTimeout(() => {
            setShowModal(true)
        }, 3000)
    }
    const ReactionImage = (imagePath) => (
        <Tooltip title={imagePath.toUpperCase()}>
            <img src={`/images/reactions/${imagePath}.png`} />
        </Tooltip>
    )
    let path = (path, index) => <img src={`/images/reactions/${path}.png`} key={index} />
    return (
        <ReactionsContainerStyle>
            {true && (
                <div className="reacted-content">
                    <div className="reacted-reactions">
                        <div className="images">{reactionIcons.map((item, index) => path(item, index))}</div>
                        {likesCount > 0 ? <div className="count">{likesCount}</div> : null}
                    </div>
                    <div className="share-comment-count">
                        <div className="commented">{data.commentsCount} Comments</div>
                        <div className="shared">{shares} Shares</div>
                    </div>
                </div>
            )}
            <div className="react">
                <div className="react-item">
                    {showModal ? (
                        <ReactionContainer className="reactions-container">
                            <div className="container">
                                {reaction.map((img, index) => (
                                    <div
                                        className="reaction-image"
                                        onClick={() => {
                                            userReaction(img)
                                        }}
                                        key={index}
                                    >
                                        {ReactionImage(img)}
                                    </div>
                                ))}
                            </div>
                        </ReactionContainer>
                    ) : null}
                    <div
                        className="like react-item"
                        onClick={() => {
                            userReaction()
                        }}
                    >
                        {isReacted ? (
                            <img src={`/images/reactions/${reactedIcon}.png`} />
                        ) : (
                            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        )}
                        <span>{isReacted ? reactedIcon : 'Like'}</span>
                    </div>
                </div>
                <div className="comment react-item">
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                    <span>Comment</span>
                </div>
                <div className="share react-item" onClick={() => setShares(shares + 1)}>
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span>Share</span>
                </div>
            </div>
        </ReactionsContainerStyle>
    )
}

export default ReactionsContainer
