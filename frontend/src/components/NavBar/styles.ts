import styled from 'styled-components'

export const NavBarContainer = styled.div`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-top: 20px;
    padding: 0 20px;
    .logo {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
        }
    }

    ul {
        margin-bottom: 0;
        li {
            list-style: none;
            color: #000;
            font-weight: 500;
            font-size: 16px;
            transition: all 0.3s ease 0s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        li:hover {
            cursor: pointer;
            color: #2376c8;
        }
    }

    @media (max-width: 460px) {
        border-radius: 0;
    }
`
