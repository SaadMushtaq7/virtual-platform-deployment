import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { Menu, MenuProps } from 'antd'
import { ImHome } from 'react-icons/im'
import { BsBuilding } from 'react-icons/bs'
import { BottomNavBarContainer } from './styles'

const BottomNavBar = () => {
    const navigate = useNavigate()
    const [activeOption, setActiveOption] = useState<'Home' | 'Companies'>('Home')
    return (
        <BottomNavBarContainer>
            <span
                className={activeOption === 'Home' ? 'nav-link active' : 'nav-link'}
                onClick={() => {
                    setActiveOption('Home')
                    navigate('/home')
                }}
            >
                <ImHome className="nav-icon" />
                <span className="nav-text">Home</span>
            </span>
            <span
                className={activeOption === 'Companies' ? 'nav-link active' : 'nav-link'}
                onClick={() => {
                    setActiveOption('Companies')
                    navigate('/companies')
                }}
            >
                <BsBuilding className="nav-icon" />
                <span className="nav-text">Companies</span>
            </span>
        </BottomNavBarContainer>
    )
}

export default BottomNavBar
