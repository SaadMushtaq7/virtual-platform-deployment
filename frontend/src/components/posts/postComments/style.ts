import styled from 'styled-components'

export const CommentSectionStyle = styled.div`
    margin: 5px 16px;
    border-top: 1px solid #ced0d4;
    .comment-reply {
        padding-left: 44px;
    }
`

export const CommentFieldStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 0;
    .image {
        height: 36px;
        width: 36px;
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
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        border-radius: 30px;
        input {
            border: none;
            background: transparent;
            outline: none;
            flex: 1;
            color: #050505;
            font-size: 15px;
        }
    }
    .stickers-container {
        display: flex;
        align-items: center;
        .item {
            &:hover {
                background: rgb(0 0 0 / 10%);
            }
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            i {
                font-size: 16px;
                color: #666c76;
            }
        }
    }
`

export const CommentStyle = styled.div<{ imgSize: string }>`
    display: flex;
    gap: 8px;
    padding-bottom: 10px;
    .image {
        height: ${(props) => (props.imgSize ? props.imgSize : '36px')};
        width: ${(props) => (props.imgSize ? props.imgSize : '36px')};
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .comment-container {
        position: relative;
        .comment {
            background: #f0f2f5;
            flex: 1;
            padding: 8px 12px 10px;
            border-radius: 20px;
            position: relative;
            .user-name {
                font-size: 13px;
                font-weight: 600;
                color: #050505;
            }
            .comment-text {
                line-height: 1.3;
                margin-top: 6px;
                font-size: 15px;
                color: #050505;
            }
            .reactions {
                position: absolute;
                right: 0;
                background: #fff;
                padding: 3px;
                border-radius: 25px;
                display: flex;
                align-items: center;
                gap: 3px;
                z-index: 1;
                .imgs {
                    img {
                        height: 18px;
                    }
                }
                .count {
                    font-size: 13px;
                    color: #65676b;
                }
            }
        }
        .comment-details {
            .details {
                display: flex;
                gap: 10px;
                margin: 4px 0 0 14px;
                .like {
                    position: relative;
                    &:hover {
                        .reactions-container {
                            width: 270px;
                        }
                    }
                }
                .item {
                    font-size: 12px;
                    font-weight: bold;
                    color: #65676b;
                    cursor: default;
                    &.time {
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .report {
        display: flex;
        align-items: center;
        .reportIcon {
            height: 32px;
            width: 32px;
            border-radius: 50%;
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background: rgb(0 0 0 / 10%);
                i {
                    display: inline-block;
                }
            }
            i {
                display: none;
                padding-top: 3px;
                color: #65676b;
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
    z-index: 2;
    .container {
        height: 50px;
        width: 270px;
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
