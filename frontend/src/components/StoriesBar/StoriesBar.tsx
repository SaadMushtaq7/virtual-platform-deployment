import React from 'react'
import StoryPreview from '../StoryPreview/StoryPreview'
import Stories from '../Stories/Stories'
import { StoriesBarWrapper } from './styles'

const StoriesBar = () => {
    return (
        <StoriesBarWrapper>
            <Stories />
        </StoriesBarWrapper>
    )
}

export default StoriesBar
