import styled from 'styled-components'

export const SearchOptionCardContainer = styled.div`
    border: 1px solid lightgray;
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
`
export const OptionsBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`

export const Bar = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 30px;
    width: 90%;

    .progress-done {
        background: linear-gradient(to left, #3aa0f1, #3aa0f1);
        border-radius: 20px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 70%;
        opacity: 1;
        font-size: 12px;
        transition: 1s ease 0.3s;
    }
`
