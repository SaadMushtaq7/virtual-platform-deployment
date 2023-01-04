import styled from 'styled-components'

export const MainStoryPreview = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: black;

    .reactions-and-reply {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .reply-input {
        background: transparent;
        border: 2px solid white;
        display: flex;
        border-radius: 30px;
        z-index: 9;
        mix-blend-mode: screen;
        color: #fff;
        input {
            border: none;
            height: 40px;
            width: 360px;
            padding: 2px 10px;
            background: transparent;
            outline: none;
            flex: 1;
            color: white;
            font-size: 15px;
        }
    }

    .reactions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
    }

    .story-reactions {
        width: 45px;
        height: 45px;
        margin: 5px;
        transition: ease-in-out 0.2s;
        cursor: pointer;
        text-align: center;
        z-index: 9;

        &:hover {
            height: 50px;
            width: 50px;
        }
    }
`

export const StoryPreviewCardStyle = styled.div`
    position: relative;
    .close-icon {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        color: gray;
    }
    .arrow-left {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
        width: 40px;
        height: 40px;
        color: gray;
        z-index: 1000;
        cursor: pointer;
    }
    .arrow-right {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translate(0, -50%);
        width: 40px;
        height: 40px;
        color: gray;
        z-index: 1000;
        cursor: pointer;
    }
`

export const StoryPreviewWrapper = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const StoryCaption = styled.div`
    margin-top: 7rem;
    margin-left: 4rem;
    color: #ffffff;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: white;

    @media (max-width: 420px), (max-height: 900px) {
        margin-top: 10rem;
    }
`
