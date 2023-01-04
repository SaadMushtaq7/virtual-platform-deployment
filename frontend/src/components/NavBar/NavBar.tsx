import React, { FC } from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import { NavBarContainer } from './styles'
import { Link } from 'react-router-dom'

interface navbarProps {
    userData: any
}

const NavBar: FC<navbarProps> = ({ userData }) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Link to="#">Profile</Link>
        },
        {
            key: '2',
            label: <Link to="#">Settings</Link>
        },
        {
            key: '3',
            label: (
                <Link style={{ color: 'crimson' }} to="/">
                    Logout
                </Link>
            )
        }
    ]
    const username = userData.name.split(' ')[0]
    return (
        <NavBarContainer>
            <div className="logo">
                <img src="/images/Virtual.png" alt="" />
            </div>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <div>
                    <div className="logo">
                        <img src={userData.profileImage} />
                    </div>
                    {username}
                </div>
            </Dropdown>
        </NavBarContainer>
    )
}

export default NavBar
