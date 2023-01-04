import styled from 'styled-components'

export const PeopleCardContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;

    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    p {
        color: grey;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`

export const ConnectButton = styled.div`
    text-align: center;
    background-color: white;
    color: #0a66c2;
    font-weight: bolder;
    outline: none;
    border: 1px solid #0a66c2;
    border-radius: 15px;
    font-size: 14px;
    padding: 7px 20px;
    cursor: pointer;

    &:hover {
        background-color: #0a66c2;
        color: white;
    }
`
