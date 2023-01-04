import styled from 'styled-components'

export const SignUpContainer = styled.div`
    height: 100vh;
    width: 100vw;
    opacity: 0.95;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SignUpForm = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    input.email,
    input.password {
        width: 95%;
        padding: 12px 20px;
        margin: 10px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        font-size: 15px;
        background-color: #e5e7ea;
    }
    input:focus {
        border: 1.5px solid #1877f2;
    }

    button.registerBtn {
        background-color: #36a420;
        color: white;
        font-weight: bolder;
        font-size: 15px;
        padding: 10px 20px;
        margin: 5% 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    button.registerBtn:hover {
        background-color: #30931c;
    }

    .error {
        color: crimson;
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    @media (max-width: 1120px) {
        width: 350px;
    }
    @media (max-width: 460px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    p {
        flex: 1;
        display: flex;
        align-items: end;
        font-size: 16px;
        span {
            margin-left: 5px;
            font-weight: bolder;
            color: grey;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export const SignUpHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #d6d4d4;
    h1 {
        font-size: 30px;
        font-weight: bolder;
    }
`

export const UploadProfileImage = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        text-align: center;
    }
    .user-icon{
        width: 100px;
        height: 100px;
        color: #1877F2;
        cursor: pointer;
        border-radius: 50%;
    }
    input{
        display: none;
    }
    p{
        color: #1877F2;
        font-size: 12px;
        cursor: pointer;
    }
    .imageContainer{
        width: 120px;
        height: 120px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 50%;
    }
    .previewImage{
        position: relative;
    }
    .deleteIcon{
        position:absolute;
        width: 20px;
        height: 20px;
        right: 2px;
        top: 0px;
        color: gray;
        cursor: pointer;
    }
`

export const FullName = styled.div`
    display: flex;
    flex-direction: row;
    .firstname-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .surname-div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        width: 90%;
        padding: 12px 20px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        font-size: 15px;
        margin: 10px 0;
        background-color: #e5e7ea;
    }
`