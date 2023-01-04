import styled from 'styled-components'

export const CompanyPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`
export const CompanyMainPage = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    border-radius: 10px;
    margin-top: 20px;
    @media (max-width: 850px) {
        margin: 0;
        border-radius: 0;
    }
`

export const CompanyDisplayImages = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    span.coverPicContainer {
        height: 13rem;
        .coverPic {
            width: 100%;
            height: 100%;
            border-radius: 10px;

            @media (max-width: 850px) {
                border-radius: 0;
            }
        }
    }

    .displayPic {
        width: 75px;
        height: 75px;
        border-radius: 37.5px;
        position: absolute;
        bottom: -30px;
        left: 10px;
        z-index: 9;
        border: 2px solid gray;
    }
`
export const CompanyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3em;
    margin-left: 1em;
    padding: 5px;

    .companyName {
        font-size: 25px;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .companyAddress {
        font-size: 15px;
        margin-bottom: 5px;
    }
    .companyFollower {
        font-size: 15px;
        color: gray;
        margin-bottom: 5px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    margin: 10px 0;
    height: 30px;
    button {
        color: white;
        font-weight: bold;
        outline: none;
        border: 1px solid #0a66c2;
        border-radius: 15px;
        padding: 0 20px;
        transition: 0.2s;
        margin-right: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
        @media (max-width: 850px) {
            padding: 0 10px;
            font-size: 11px;
        }
    }
    .followCompanyButton {
        background-color: #0a66c2;
    }
    .followCompanyButton:hover {
        opacity: 0.9;
    }

    .websiteCompanyButton {
        background-color: white;
        color: #0a66c2;
    }
    .websiteCompanyButton:hover {
        background-color: #accfef;
    }

    .moreCompanyButton {
        background-color: white;
        color: gray;
        border: 1px solid gray;
    }
    .moreCompanyButton:hover {
        border: 1px solid gray;
        background-color: #bfbfbf;
    }
`

export const PageOptionsContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    margin-top: 20px;
    overflow: auto;
    height: fit-content;

    .companyAbout {
        font-size: 14px;
        color: gray;
        margin: 5px 0;
        line-height: 1.3;
        span {
            color: #0a66c2;
            border-bottom: 2px solid #0a66c2;
            cursor: pointer;
            font-weight: bold;
        }
        span:hover {
            color: #0a66c2;
            border-bottom: 2px solid #0a66c2;
        }
    }

    .companyAddress {
        font-size: 15px;
        color: gray;
        margin: 5px 0;
    }

    .companyHashtags {
        font-size: 15px;
        color: #0a66c2;
        margin: 10px 0;
        cursor: pointer;
    }

    @media (max-width: 460px) {
        border-radius: 0;
    }
`

export const RecentPostContainer = styled.div`
    border-radius: 10px;
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    margin: 20px 0;
    height: fit-content;
    overflow: auto;

    h2 {
        margin: 5px 10px;
    }

    @media (max-width: 850px) {
        border-radius: 0;
    }
`

export const RecentPostsDisplay = styled.div`
    width: 100%;
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 20px;
    height: fit-content;
    overflow: auto;
    .recentPost {
        margin: 5px;
        width: 350px;
        cursor: pointer;
    }
    ::-webkit-scrollbar {
        height: 4px;
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
