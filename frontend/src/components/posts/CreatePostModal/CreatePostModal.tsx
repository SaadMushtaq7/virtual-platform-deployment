import React, { FC, useState } from 'react'
import axios from 'axios'
import { useRequest } from 'ahooks'
import { v4 as uuidv4 } from 'uuid'
import { Button, Modal, Select } from 'antd'
import EmojiPicker from 'emoji-picker-react'
import { EmojiOpener, EmojiPickerContainer, ImagePicker, ModalContainer, PostInputField, UserProfile } from './styles'
import { BsEmojiSmile, BsFillPeopleFill } from 'react-icons/bs'
import { RiImageAddFill } from 'react-icons/ri'
import { AiFillCloseCircle, AiFillLock } from 'react-icons/ai'
import { MdPublic } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAtom } from 'jotai'
import { allPosts } from '../../../store'
import { storage } from '../../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { postDataType } from '../../../dataTypes'

interface createPostModalProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    userData: any
}

const CreatePostModal: FC<createPostModalProps> = ({ open, setOpen, loading, setLoading, userData }) => {
    const [postData, setPostData] = useAtom(allPosts)

    const [emojiOpener, setEmojiOpener] = useState<boolean>(false)
    const [postContent, setPostContent] = useState<string>('')
    const [postImage, setPostImage] = useState<any>(null)

    const handlePostApi = (imgUrl: string) => {
        return axios.post('http://localhost:8000/post/addPost', {
            postId: uuidv4(),
            profileImage: userData.profileImage,
            postText: postContent,
            userName: userData.name,
            postImage: imgUrl
        })
    }

    const { error, runAsync } = useRequest((imgUrl) => handlePostApi(imgUrl), {
        manual: true,
        onSuccess: () => {
            let temp: postDataType[]
            if (postImage) {
                temp = [...postData, { ...postData[0], postText: postContent, postImage: URL.createObjectURL(postImage) }]
            } else {
                temp = [...postData, { ...postData[0], postText: postContent }]
            }
            setPostData(temp)
            setLoading(false)
            setOpen(false)

            toast.success(`Post Created Successfully!`)
        },
        onError: () => {
            setLoading(false)
            setOpen(false)
            toast.error(`Error! ${error ? error.message : 'Failed to create Post'}`)
        },
        onFinally: () => {
            setPostContent('')
            setPostImage(null)
        }
    })

    const handlePost = async () => {
        if (postContent !== '' || postImage) {
            if (postImage) {
                const firebaseImageRef = ref(storage, `posts/image/post${uuidv4()}`)
                await uploadBytes(firebaseImageRef, postImage)
                await getDownloadURL(firebaseImageRef).then((url) => {
                    runAsync(url)
                })
            } else {
                runAsync('/images/userImg.jpg')
            }
        } else {
            toast.error(`Error! Cannot create empty post`)
        }
    }

    const handleCancel = () => {
        setOpen(false)
        setEmojiOpener(false)
        setPostContent('')
    }

    const handleChange = (value: string) => {
        console.log(`selected ${value}`)
    }
    return (
        <div onClick={() => emojiOpener && setEmojiOpener(false)}>
            <Modal
                open={open}
                centered
                onOk={handlePost}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handlePost}>
                        Post
                    </Button>
                ]}
            >
                <ModalContainer>
                    <h2>Create Post</h2>
                    <UserProfile>
                        <img src={userData.profileImage} alt="user" />
                        <div>
                            <p className="username">Anees Anwar</p>
                            <Select
                                defaultValue="public"
                                style={{ width: 100, border: 'none', margin: 5 }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'public',
                                        label: (
                                            <span className="select">
                                                <p className="selectP">
                                                    <MdPublic />
                                                    Public
                                                </p>
                                            </span>
                                        )
                                    },
                                    {
                                        value: 'friends',
                                        label: (
                                            <span className="select">
                                                <p className="selectP">
                                                    <BsFillPeopleFill />
                                                    Friends
                                                </p>
                                            </span>
                                        )
                                    },

                                    {
                                        value: 'only me',
                                        label: (
                                            <span className="select">
                                                <p className="selectP">
                                                    <AiFillLock />
                                                    Only Me
                                                </p>
                                            </span>
                                        )
                                    }
                                ]}
                            />
                        </div>
                    </UserProfile>
                    <PostInputField
                        placeholder="Whats on your mind, Anees?"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    <EmojiOpener>
                        <ImagePicker>
                            {postImage ? (
                                <div className="previewImage">
                                    <img src={URL.createObjectURL(postImage)} alt="upload Image" />
                                    <AiFillCloseCircle className="deleteIcon" onClick={() => setPostImage(null)} />
                                </div>
                            ) : (
                                <>
                                    <input
                                        className="chooseFile"
                                        type="file"
                                        id="file"
                                        accept="image/*"
                                        onChange={(e) => setPostImage(e.target.files[0])}
                                    />
                                    <label htmlFor="file">
                                        <RiImageAddFill color="green" width={100} height={100} />
                                    </label>
                                </>
                            )}
                        </ImagePicker>
                        <BsEmojiSmile onClick={() => setEmojiOpener(true)} />
                    </EmojiOpener>
                    <EmojiPickerContainer>
                        {emojiOpener && (
                            <EmojiPicker
                                onEmojiClick={({ emoji }) => {
                                    setPostContent(postContent + emoji)
                                }}
                            />
                        )}
                    </EmojiPickerContainer>
                </ModalContainer>
            </Modal>
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
        </div>
    )
}

export default CreatePostModal
