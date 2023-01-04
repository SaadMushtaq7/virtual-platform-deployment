import React from 'react'
import PostComment from '../postComments/PostComments'
import PostContent from '../postContent/PostContent'
import PostHeader from '../postHeader/PostHeader'
import ReactionsContainer from '../reactionsContainer/ReactionsContainer'
import { PostCardStyle } from './style'

function PostCard({ data }) {
    const { postImage } = data

    return (
        <PostCardStyle>
            <PostHeader data={data} />
            <PostContent data={data} />
            <ReactionsContainer data={data} />
            <PostComment postImage={postImage} />
        </PostCardStyle>
    )
}

export default PostCard
