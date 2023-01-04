import styled from 'styled-components'

export const SearchBarContainer = styled.form`
    display: flex;
    flex-direction: row;
    margin: 20px 0;

    input {
        padding: 5px 20px;
        outline: none;
        border: 1px solid gray;
        border-radius: 10px 0 0 10px;
    }
    input:focus {
        border: 2px solid #0a66c2;
    }

    button {
        padding: 10px;
        background-color: transparent;
        border: 1px solid #0a66c2;
        border-radius: 0 10px 10px 0;
        color: #0a66c2;
        font-weight: bold;
        transition: 0.2s;
    }

    button:hover {
        background-color: #0a66c2;
        color: white;
    }
`
