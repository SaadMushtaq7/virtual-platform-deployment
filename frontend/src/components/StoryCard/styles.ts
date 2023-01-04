import styled from 'styled-components'

export const StoryCardWrapper = styled.div`
    position: relative;
    -webkit-transition-property: all;
    -webkit-transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-in;
    cursor: pointer;
    width: 140px;
    height: 100%;
    :hover {
        transform: scale(1.02);
    }
`

export const StoryUserImage = styled.img`
    object-fit: cover;
    position: absolute;
    top: 1rem;
    left: 10px;
    z-index: 50;
    border-radius: 9999px;
    border-width: 2px;
    border-color: #3b82f6;
    border-style: solid;
    width: 40px;
    height: 40px;

    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
    // @media (min-width: 1024px) {
    //     opacity: 1;
    //     width: 40px;
    // }
`

export const UserStory = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    border-radius: 20px;
    filter: brightness(0.5);

    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
    opacity: 1;
`

export const UserNameWrapper = styled.p`
    position: absolute;
    right: 10px;
    bottom: 0.0005rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 83%;
`
