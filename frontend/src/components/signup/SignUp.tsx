import React, { useState, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRequest } from 'ahooks'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BiErrorCircle } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { storage } from '../../firebase'
import { getDownloadURL, ref, StorageReference, uploadBytes, deleteObject } from 'firebase/storage'
import { FullName, SignUpContainer, SignUpForm, SignUpHeader, UploadProfileImage } from './styles'
import { Loading } from '../signin/styles'
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {
    const navigate = useNavigate()
    const firebaseProfileImageRef = useRef<StorageReference>()
    const [imgUrl, setImgUrl] = useState<string>('')

    const userSignUp = (firstname: string, surname: string, email: string, password: string) => {
        return axios.post('http://localhost:8000/user/create', {
            profileImage: imgUrl,
            name: `${firstname} ${surname}`,
            email: email,
            password: password
        })
    }
    const { loading, runAsync, error } = useRequest(
        (firstname: string, surname: string, email: string, password: string) => userSignUp(firstname, surname, email, password),
        {
            manual: true,
            onSuccess: () => {
                toast.success('User created successfully!', {
                    autoClose: 2400
                })
                setTimeout(() => {
                    navigate('/')
                }, 2500)
            },
            onError: (error) => {
                //@ts-ignore
                !error.response.data === 'Email already exists' &&
                    toast.error(`Error! ${error ? error.message : 'Failed to create User'}`)
            }
        }
    )
    const validate = Yup.object({
        firstname: Yup.string().min(2, 'Must be 2 or more characters').required('Required'),
        surname: Yup.string().min(2, 'Must be 2 or more characters').required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().min(8, 'Must be 8 or more characters').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Required')
    })
    const formik = useFormik({
        initialValues: {
            firstname: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: (values) => {
            const { firstname, surname, email, password } = values
            runAsync(firstname, surname, email, password)
        },
        validationSchema: validate
    })

    const handleProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        firebaseProfileImageRef.current = ref(storage, `users/profileImage/profile${uuidv4()}`)
        await uploadBytes(firebaseProfileImageRef.current, e.target.files[0])
        await getDownloadURL(firebaseProfileImageRef.current).then((url) => {
            setImgUrl(url)
        })
    }

    const handleChangeProfileImage = () => {
        deleteObject(firebaseProfileImageRef.current)
            .then(() => {
                setImgUrl(null)
            })
            .catch((err) => console.log(err))
    }

    if (loading) {
        return <Loading className="loader" src={'/gif/loading.gif'} alt="loader" />
    }

    return (
        <>
            <SignUpContainer>
                <SignUpForm onSubmit={formik.handleSubmit}>
                    <SignUpHeader>
                        <h1>Sign Up</h1>
                    </SignUpHeader>
                    <UploadProfileImage>
                        {imgUrl ? (
                            <div className="previewImage">
                                <div className="imageContainer">
                                    <img src={imgUrl} alt="user" />
                                </div>
                                <AiFillCloseCircle className="deleteIcon" onClick={handleChangeProfileImage} />
                            </div>
                        ) : (
                            <>
                                <input type="file" id="file" accept="image/*" onChange={(e) => handleProfileImage(e)} />
                                <label htmlFor="file">
                                    <FaRegUserCircle className="user-icon" />
                                    <p>Upload Profile Image</p>
                                </label>
                            </>
                        )}
                    </UploadProfileImage>
                    <FullName>
                        <div className="firstname-div">
                            <input
                                type="text"
                                name="firstname"
                                value={formik.values.firstname}
                                onChange={formik.handleChange}
                                placeholder="First Name"
                            />
                            {formik.touched.firstname && formik.errors.firstname && (
                                <div className="error">
                                    <BiErrorCircle />
                                    {formik.errors.firstname}
                                </div>
                            )}
                        </div>
                        <div className="surname-div">
                            <input
                                type="text"
                                name="surname"
                                value={formik.values.surname}
                                onChange={formik.handleChange}
                                placeholder="Surname"
                            />
                            {formik.touched.surname && formik.errors.surname && (
                                <div className="error">
                                    <BiErrorCircle />
                                    {formik.errors.surname}
                                </div>
                            )}
                        </div>
                    </FullName>
                    <input
                        className="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    {formik.touched.surname && formik.errors.email && (
                        <div className="error">
                            <BiErrorCircle />
                            {formik.errors.email}
                        </div>
                    )}
                    {error?.message && (
                        <div className="error">
                            <BiErrorCircle />
                            Email already exists!
                        </div>
                    )}
                    <input
                        className="password"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="password"
                    />
                    {formik.touched.surname && formik.errors.password && (
                        <div className="error">
                            <BiErrorCircle />
                            {formik.errors.password}
                        </div>
                    )}
                    <input
                        className="password"
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        placeholder="Confirm password"
                    />
                    {formik.touched.surname && formik.errors.confirmPassword && (
                        <div className="error">
                            <BiErrorCircle />
                            {formik.errors.confirmPassword}
                        </div>
                    )}

                    <button className="registerBtn" type="submit">
                        Sign Up
                    </button>
                    <p>
                        Already have an account.
                        <span className="loginLink" onClick={() => navigate('/')}>
                            Login
                        </span>
                    </p>
                </SignUpForm>
            </SignUpContainer>
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
        </>
    )
}

export default SignUp
