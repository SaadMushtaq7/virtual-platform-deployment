import styled from 'styled-components'

export const PostHeaderStyle = styled.div`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    justify-content: space-between;

    .header-left-side {
        display: flex;
        align-items: center;
        gap: 8px;
        .user-image {
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
        .details {
            .user-name {
                color: #050505;
                font-weight: 600;
                font-size: 15px;
            }
            .post-details {
                display: flex;
                align-items: center;
                gap: 10px;
                .time {
                    font-weight: 400;
                    font-size: 13px;
                    color: #606770;
                }
                i {
                    font-size: 14px;
                }
            }
        }
    }
    .header-right-side {
        position: relative;
        .menu {
            height: 36px;
            width: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
                background: #f2f3f5;
            }
            i {
                font-size: 22px;
                padding-top: 2px;
                color: #606770;
            }
        }
    }
`

export const MenuModalStyle = styled.div`
    width: 340px;
    background: #fff;
    position: absolute;
    right: 0;
    padding: 10px;
    border-radius: 10px;
    .divider {
        border-bottom: 1px solid #ced0d4;
        margin: 8px auto;
        width: 93%;
    }
`

export const MenuItemStyle = styled.div`
    display: flex;
    padding: 8px;
    gap: 13px;
    transition: ease-in-out 0.3s;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #f2f3f5;
    }
    .icon {
        width: 24px;
        text-align: center;
        i {
            font-size: 20px;
            color: #606770;
            font-weight: 500;
        }
    }
    .text {
        line-height: 1.1;
        .title {
            color: #050505;
            font-size: 15px;
            font-weight: 600;
        }
        .desc {
            color: #606770;
            margin-top: 6px;
            font-size: 12px;
            font-weight: 400;
        }
    }
`
