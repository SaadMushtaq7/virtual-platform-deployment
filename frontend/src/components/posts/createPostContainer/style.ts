import styled from 'styled-components'

export const CreatePostCardStyle = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 16px 16px 10px;
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
`
export const CreatePostField = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ced0d4;
    .image {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .input-field {
        background: #f0f2f5;
        flex: 1;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        border-radius: 30px;
        color: #65676b;
        font-size: 17px;
        cursor: pointer;
    }
`
export const CreatePostContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    .react-item {
        &.like {
            &:hover {
                .reactions-container {
                    width: 270px;
                }
            }
        }
        transition: ease-in-out 0.3s;
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        justify-content: center;
        height: 40px;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
            background: #f2f3f5;
        }
        i {
            font-size: 24px;
            &.live-video {
                color: red;
            }
            &.photo {
                color: green;
            }
            &.feeling {
                color: orange;
            }
        }
        span {
            font-size: 15px;
            font-weight: 500;
            color: #65676b;
        }
        @media (max-width: 768px) {
            gap: 6px;
            i {
                font-size: 18px;
            }
            span {
                font-size: 13px;
            }
        }
    }
`
