import React, { FC } from 'react'
import { RecentPostContentStyle } from './styles'

interface postContentProps {
    data: { postText: string; postImage: string }
}

const RecentPostContent: FC<postContentProps> = ({ data }) => {
    return (
        <RecentPostContentStyle>
            <div className="description">
                {data.postText.length <= 15 ? data.postText : `${data.postText.substring(0, 15)}...`}
            </div>
            <div className="image">
                <img src={data.postImage} />
            </div>
        </RecentPostContentStyle>
    )
}

export default RecentPostContent
