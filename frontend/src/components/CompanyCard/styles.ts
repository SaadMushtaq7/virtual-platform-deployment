import styled from 'styled-components'

export const CompanyCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;

    img {
        width: 75px;
        height: 75px;
    }
`

export const CompanyCardOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
    height: fit-content;
    width: 100%;
    margin: 10px 0;

    .followCompanyButton {
        text-align: center;
        background-color: white;
        color: #0a66c2;
        font-weight: bolder;
        outline: none;
        border: 1px solid #0a66c2;
        border-radius: 15px;
        padding: 7px 20px;
        transition: 0.2s;
    }
    .followCompanyButton:hover {
        border: 2px solid #0a66c2;
        background-color: #0a66c2;
        opacity: 0.6;
        color: #fff;
    }
`

export const CompanyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 100%;
    height: fit-content;
    cursor: pointer;

    .companyName {
        font-size: 15px;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .companyAddress {
        font-size: 12px;
        margin-bottom: 5px;
    }
    .companyFollower {
        font-size: 12px;
        color: gray;
        margin-bottom: 5px;
    }
    .companyAbout {
        font-size: 10px;
        color: gray;
        margin-bottom: 5px;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;

        @supports (-webkit-line-clamp: 2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
`
