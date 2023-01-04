import React, { useState } from 'react'
import Stories from 'react-insta-stories'
import { useNavigate } from 'react-router-dom'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { storiesData } from '../../utils/index'
import { MainStoryPreview, StoryCaption, StoryPreviewCardStyle, StoryPreviewWrapper } from './styles'

const StoryPreview = () => {
    const navigate = useNavigate()
    const [currentId, setCurrentId] = useState<number>(0)

    const reaction = ['like', 'heart', 'care', 'haha', 'wow', 'angry']

    const renderStories = () => {
        const stories = storiesData.userStories.map((story) => {
            if (story.type === 'imageCaptionPost') {
                return {
                    content: () => {
                        return (
                            <>
                                <StoryPreviewWrapper
                                    style={{
                                        backgroundImage: `url(${story.backgroundImageUrl})`
                                    }}
                                >
                                    <StoryCaption>
                                        <span className={`text-${story.captionColor}-500`}>{story.caption}</span>
                                    </StoryCaption>
                                </StoryPreviewWrapper>
                            </>
                        )
                    }
                }
            } else {
                return story
            }
        })

        return stories
    }

    return (
        <MainStoryPreview>
            <StoryPreviewCardStyle>
                <BsFillArrowLeftCircleFill
                    onClick={() => setCurrentId((currentId) => (currentId === 0 ? (currentId = 5) : currentId - 1))}
                    className="arrow-left"
                />
                <Stories
                    loop
                    height={'85vh'}
                    currentIndex={currentId}
                    stories={renderStories()}
                    onStoryEnd={() => {
                        setCurrentId((currentId) => currentId + 1)
                    }}
                    onAllStoriesEnd={() => {
                        setCurrentId((currentId) => 0)
                    }}
                    onStoryStart={() => {
                        setCurrentId((currentId) => currentId + 1 - 1)
                    }}
                />
                <BsFillArrowRightCircleFill
                    onClick={() => setCurrentId((currentId) => (currentId === 5 ? (currentId = 0) : currentId + 1))}
                    className="arrow-right"
                />
                <AiFillCloseCircle onClick={() => navigate('/')} className="close-icon" />
            </StoryPreviewCardStyle>
            <div className="reactions-and-reply">
                <div className="reactions">
                    {reaction.map((react) => (
                        <img className="story-reactions" key={react} src={`/images/reactions/${react}.png`} />
                    ))}
                </div>
                <div className="reply-input">
                    <input type="text" placeholder="Reply..." contentEditable />
                </div>
            </div>
        </MainStoryPreview>
    )
}

export default StoryPreview
