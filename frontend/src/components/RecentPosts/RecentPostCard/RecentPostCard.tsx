import React, { FC } from 'react'
import RecentPostContent from '../RecentPostContent/RecentPostContent'
import RecentPostHeader from '../RecentPostHeader/RecentPostHeader'
import { RecentPostCardStyle } from './styles'

interface recentPostProps {
    data: {
        profileImage: string
        username: string
        time: string
        postType: {
            icon: string
            type: string
        }
        postText: string
        postImage: string
        reactions: string[]
        reactionsCount: number
        commentsCount: number
    }
}

const RecentPostCard: FC<recentPostProps> = ({ data }) => {
    return (
        <RecentPostCardStyle>
            <RecentPostHeader data={data} />
            <RecentPostContent data={data} />
        </RecentPostCardStyle>
    )
}

export default RecentPostCard
