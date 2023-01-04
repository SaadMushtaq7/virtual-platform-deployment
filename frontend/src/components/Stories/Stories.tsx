import React from 'react'
import { StoriesWrapper } from './styles'
import StoryCard from '../StoryCard/StoryCard'
import { storiesData } from '../../dummyData/storiesData'
const Stories = () => {
    return (
        <StoriesWrapper>
            {storiesData &&
                storiesData.map((profile) => <StoryCard key={profile.userId} img={profile.avatar} username={profile.username} />)}
        </StoriesWrapper>
    )
}

export default Stories
