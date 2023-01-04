import styled from 'styled-components'

export const StoriesBarWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 10px;
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
    display: flex;
    overflow-x: scroll;
    font-family: 'Neucha', cursive;
    height: 240px;

    ::-webkit-scrollbar {
        height: 0px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
