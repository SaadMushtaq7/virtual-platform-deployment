import React, { FC, useState } from 'react'
import { Tooltip } from 'antd'
import { RecentMenuItemStyle, RecentMenuModalStyle, RecentPostHeaderStyle } from './styles'

interface recentPostHeaderProps {
    data: { profileImage: string; username: string; time: string; postType: { type: string; icon: string } }
}

const RecentPostHeader: FC<recentPostHeaderProps> = ({ data }) => {
    const [showMenuModal, setShowMenuModal] = useState<boolean>(false)

    return (
        <RecentPostHeaderStyle>
            <div className="header-left-side">
                <div className="user-image">
                    <img src={data.profileImage} />
                </div>
                <div className="details">
                    <div className="user-name">{data.username}</div>
                    <div className="post-details">
                        <div className="time">{data.time}</div>
                        <div className="post-privacy">
                            <Tooltip title={data.postType.type}>
                                <i className={`fa ${data.postType.icon}`} aria-hidden="true"></i>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-right-side">
                <div
                    className="menu"
                    onClick={(e) => {
                        setShowMenuModal(!showMenuModal)
                    }}
                >
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
                {showMenuModal && (
                    <RecentMenuModalStyle>
                        <div className="save-video">
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Save Video</div>
                                    <div className="desc">Add this to your save items</div>
                                </div>
                            </RecentMenuItemStyle>
                        </div>
                        <div className="divider"></div>
                        <div className="dev-data">
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-link" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Copy link</div>
                                </div>
                            </RecentMenuItemStyle>
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Turn on notifications for this post</div>
                                </div>
                            </RecentMenuItemStyle>
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-code" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Embed</div>
                                </div>
                            </RecentMenuItemStyle>
                        </div>
                        <div className="divider"></div>
                        <div className="user-data">
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Hide Post</div>
                                    <div className="desc">See fewer posts like this</div>
                                </div>
                            </RecentMenuItemStyle>
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Snooze Anees for 30 days</div>
                                    <div className="desc">Temporarily stop seeing posts</div>
                                </div>
                            </RecentMenuItemStyle>
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Hide all from Anees</div>
                                    <div className="desc">Stop seeing posts from this page</div>
                                </div>
                            </RecentMenuItemStyle>
                            <RecentMenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-flag-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Report video broadcasts</div>
                                    <div className="desc">I am concerned about this post</div>
                                </div>
                            </RecentMenuItemStyle>
                        </div>
                    </RecentMenuModalStyle>
                )}
            </div>
        </RecentPostHeaderStyle>
    )
}

export default RecentPostHeader
