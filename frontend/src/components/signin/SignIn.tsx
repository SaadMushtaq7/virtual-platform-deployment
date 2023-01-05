import React, { FC, useState, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AboutSocialPlatform, Loading, LoginForm, LoginModal, SignInContainer } from './styles'

const SignIn: FC = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const userLogin = () => {
        return axios.post('http://localhost:8000/user/login', {
            email: email,
            password: password
        })
    }

    const { loading, error, data, run } = useRequest(userLogin, { manual: true, loadingDelay: 500 })

    if (loading) {
        return <Loading className="loader" src={'/gif/loading.gif'} alt="loader" />
    }

    if (error) {
        toast.error(`Error! ${error ? error.message : 'Failed to Login'}`)
        return
    }

    if (data) {
        console.log(data)
        navigate('/home', { state: { userData: data.data } })
    }

    return (
        <SignInContainer>
            <AboutSocialPlatform>
                <h1>Social Platform</h1>
                <br />
                <p>
                    Welcome to the Social Platform to
                    <br />
                    connect with your friends and family.
                </p>
            </AboutSocialPlatform>
            <LoginForm>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address or Phone Number"
                />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button
                    className="loginBtn"
                    onClick={() => {
                        if (email.length < 1 || password.length < 1) {
                            toast.error('Enter email and password')
                            return
                        }
                        run()
                    }}
                >
                    Login
                </button>
                <p>Forgotten Password?</p>
                <button className="registerBtn" onClick={() => navigate('/signup')}>
                    Create New Account
                </button>
            </LoginForm>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </SignInContainer>
    )
}

export default SignIn
