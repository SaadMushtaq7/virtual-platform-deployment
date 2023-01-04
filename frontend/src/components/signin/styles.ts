import styled from 'styled-components'

export const Loading = styled.img`
position: absolute;
top: 50%;
left: 50%;
`

export const SignInContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f0f2f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        padding: 0;
    }
`

export const LoginModal = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    z-index: 100;
    p {
        font-size: 15px;
        font-weight: 500;
        color: blue;
        text-align: center;
        background: white;
        width: 90%;
        max-width: 400px;
        margin: 80px auto 0 auto;
        padding: 30px 0;
        border-radius: 20px;
        position: relative;
        span {
            position: absolute;
            top: 6px;
            right: 5px;
            font-size: 13px;
            width: 18px;
            height: 17px;
            cursor: pointer;
        }
    }
`
export const AboutSocialPlatform = styled.div`
    h1 {
        color: #1877f2;
        font-weight: bolder;
        padding: 0;
        margin: 0;
    }
    @media (max-width: 1120px) {
        margin-bottom: 5px;
    }
`

export const LoginForm = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    input {
        width: 95%;
        padding: 8px 10px;
        margin: 10px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        transition: 0.9s;
        outline: none;
    }
    input:focus {
        border: 1.5px solid #1877f2;
    }

    button.loginBtn {
        background-color: #1877f2;
        color: white;
        font-weight: bolder;
        padding: 15px 55px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    button.loginBtn:hover {
        background-color: #176ed8;
    }

    button.registerBtn {
        background-color: #36a420;
        color: white;
        font-weight: bolder;
        margin-top: 5%;
        padding: 15px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }
    button.registerBtn:hover {
        background-color: #30931c;
    }

    p {
        color: #1877f2;
        margin-top: 10px;
        padding-bottom: 15px;
        margin-bottom: 5px;
        cursor: pointer;
        transition: 0.9s;
        height: 22px;
    }
    p:hover {
        border-bottom: 1px solid #1877f2;
    }

    @media (max-width: 800px) {
        width: 18rem;
        font-size: 12px;
    }

    @media (max-width: 460px) {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
    }
`
