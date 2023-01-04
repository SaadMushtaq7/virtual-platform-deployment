import styled from 'styled-components'

export const RecentPostHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;

    .header-left-side {
        display: flex;
        align-items: center;
        gap: 4px;

        .user-image {
            height: 30px;
            width: 30px;
            border-radius: 15px;
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
                font-size: 12px;
            }
            .post-details {
                display: flex;
                align-items: center;
                gap: 6px;
                .time {
                    font-weight: 400;
                    color: #606770;
                    font-size: 9px;
                }
                i {
                    font-size: 11px;

                    padding-top: 2px;
                    color: #606770;
                }
            }
        }
    }
    .header-right-side {
        .menu {
            height: 28px;
            width: 28px;
            border-radius: 50%;

            i {
                font-size: 18px;
            }
        }
    }
`

export const RecentMenuModalStyle = styled.div`
    width: 243px;
    background: #fff;
    position: absolute;
    right: 0;
    padding: 7px;
    border-radius: 10px;
    .divider {
        border-bottom: 1px solid #ced0d4;
        margin: 6px auto;
        width: 93%;
    }
`

export const RecentMenuItemStyle = styled.div`
    display: flex;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    padding: 5px;
    gap: 9px;
    border-radius: 3px;
    &:hover {
        background: #f2f3f5;
    }
    .icon {
        width: 18px;
        text-align: center;

        i {
            font-size: 16px;
            color: #606770;
            font-weight: 500;
        }
    }
    .text {
        line-height: 1.1;
        .title {
            color: #606770;
            margin-top: 6px;
            font-size: 12px;
            font-weight: 600;
        }
        .desc {
            color: #606770;
            margin-top: 4px;
            font-size: 10px;
            font-weight: 400;
        }
    }
`
