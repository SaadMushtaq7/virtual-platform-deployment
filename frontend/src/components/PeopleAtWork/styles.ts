import styled from 'styled-components'

export const PeopleContainer = styled.div`
    width: 100%;
    max-width: 650px;
    .searchedTags {
        padding: 5px 10px;
        font-weight: bold;
        border-radius: 20px;
    }

    h3.peopleYouKnow {
        margin: 10px;
    }
`

export const TagsInputField = styled.div`
    width: 100%;
    margin: 10px;
    margin-top: 0;
    h3 {
        margin: 10px 0;
    }
    input {
        margin-top: 0px;
        padding: 5px 5px;
        height: 30px;
        width: 50%;
        border: 1px solid gray;

        outline: none;
    }

    input:hover {
        border: 1px solid darkgray;
    }

    button {
        padding: 5px 15px;
        margin-left: 5px;
        height: 30px;
        font-size: 12px;
        outline: none;
        border: 1px solid gray;
        background-color: #0065c8;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: white;
        color: #0065c8;
        border: 1px solid #0065c8;
    }
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 5px 0;
    width: 100%;
    border-bottom: 1px solid lightgray;
`

export const SearchOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
`
export const PeopleYouMayKnowContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    width: 100%;
    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
`
