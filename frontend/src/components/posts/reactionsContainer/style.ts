import styled from 'styled-components'

export const ReactionsContainerStyle = styled.div`
    padding: 16px 16px 0;
    font-size: 15px;
    color: #65676b;
    .reacted-content {
        padding-bottom: 10px;
        border-bottom: 1px solid #ced0d4;
        margin-bottom: 5px;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        .reacted-reactions {
            display: flex;
            gap: 6px;
            align-items: center;
            .images {
                height: 18px;
                img {
                    height: 100%;
                }
            }
            .count {
                color: #65676b;
            }
        }
        .share-comment-count {
            display: flex;
            gap: 10px;
            align-items: center;
        }
    }
    .react {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 34px;
        .react-item {
            &:hover {
                .reactions-container {
                    width: 310px;
                }
            }
            transition: ease-in-out 0.3s;
            position: relative;
            display: flex;
            align-items: center;
            gap: 6px;
            flex: 1;
            justify-content: center;
            height: 100%;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background: #f2f3f5;
            }
            .like {
                img {
                    height: 18px;
                }
                span {
                    text-transform: capitalize;
                }
            }
            i {
                font-size: 18px;
            }
        }
    }
`

export const ReactionContainer = styled.div`
    width: 0px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.3s;
    position: absolute;
    overflow: hidden;
    top: -50px;
    left: 0;
    border-radius: 25px;
    .container {
        height: 50px;
        width: 310px;
        background: #fff;
        display: flex;
        align-items: center;
        .reaction-image {
            height: 45px;
            width: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 39px;
                transition: ease-in-out 0.2s;
                &:hover {
                    width: 48px;
                }
            }
        }
    }
`
