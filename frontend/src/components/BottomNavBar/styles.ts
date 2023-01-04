import styled from 'styled-components'

export const BottomNavBarContainer = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 0;
    width: 650px;
    max-width: 100%;
    height: 55px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #fff;
    display: flex;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1000;

    .nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 2.4rem;
        cursor: pointer;
    }

    .active {
        color: #0065c8;
    }
    .nav-icon {
        font-size: 18px;
    }
`
