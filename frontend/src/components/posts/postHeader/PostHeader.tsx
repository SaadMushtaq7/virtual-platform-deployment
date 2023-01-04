import React from 'react'
import { useState } from 'react'
import { Tooltip } from 'antd'
import { MenuItemStyle, MenuModalStyle, PostHeaderStyle } from './style'

type postHeaderProps = {
    data: { profileImage: string; userName: string; time: string; postType: { type: string; icon: string } }
}

function PostHeader(props: postHeaderProps) {
    const { data } = props
    const [showMenuModal, setShowMenuModal] = useState(false)
    return (
        <PostHeaderStyle>
            <div className="header-left-side">
                <div className="user-image">
                    <img src={data.profileImage} />
                </div>
                <div className="details">
                    <div className="user-name">{data.userName}</div>
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
                    <MenuModalStyle>
                        <div className="save-video">
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Save Video</div>
                                    <div className="desc">Add this to your save items</div>
                                </div>
                            </MenuItemStyle>
                        </div>
                        <div className="divider"></div>
                        <div className="dev-data">
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-link" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Copy link</div>
                                </div>
                            </MenuItemStyle>
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Turn on notifications for this post</div>
                                </div>
                            </MenuItemStyle>
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-code" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Embed</div>
                                </div>
                            </MenuItemStyle>
                        </div>
                        <div className="divider"></div>
                        <div className="user-data">
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Hide Post</div>
                                    <div className="desc">See fewer posts like this</div>
                                </div>
                            </MenuItemStyle>
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Snooze Anees for 30 days</div>
                                    <div className="desc">Temporarily stop seeing posts</div>
                                </div>
                            </MenuItemStyle>
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Hide all from Anees</div>
                                    <div className="desc">Stop seeing posts from this page</div>
                                </div>
                            </MenuItemStyle>
                            <MenuItemStyle>
                                <div className="icon">
                                    <i className="fa fa-flag-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <div className="title">Report video broadcasts</div>
                                    <div className="desc">I'm concerned about this post</div>
                                </div>
                            </MenuItemStyle>
                        </div>
                    </MenuModalStyle>
                )}
            </div>
        </PostHeaderStyle>
    )
}

export default PostHeader
