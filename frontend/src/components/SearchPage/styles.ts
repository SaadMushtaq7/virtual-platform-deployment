import styled from 'styled-components'

export const SearchPageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SearchResult = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    margin: 20px;
    .no-content {
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #0a66c2;
        font-weight: 600;
    }
`
