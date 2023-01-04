import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoryCardWrapper, StoryUserImage, UserStory, UserNameWrapper } from './styles'

interface StoryData {
    img: string
    username: string
}

const StoryCard: FC<StoryData> = ({ img, username }) => {
    const navigate = useNavigate()
    return (
        <StoryCardWrapper onClick={() => navigate('/story')}>
            <StoryUserImage src={img} alt="user" />
            <UserStory src={img} alt="user-story" />
            <UserNameWrapper>{username}</UserNameWrapper>
        </StoryCardWrapper>
    )
}

export default StoryCard
