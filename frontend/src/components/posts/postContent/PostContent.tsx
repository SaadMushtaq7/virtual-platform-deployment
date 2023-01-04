import React from 'react'
import { PostContentStyle } from './style'

type postContentProps = {
    data: { postText: string; postImage: string }
}

function PostContent(props: postContentProps) {
    const { data } = props
    return (
        <PostContentStyle>
            <div className="description">{data.postText}</div>
            <div className="image">
                <img src={data.postImage} />
            </div>
        </PostContentStyle>
    )
}

export default PostContent
