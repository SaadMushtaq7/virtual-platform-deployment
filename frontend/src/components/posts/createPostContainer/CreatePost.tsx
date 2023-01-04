import React, { FC, useState } from 'react'
import { CreatePostCardStyle, CreatePostContent, CreatePostField } from './style'
import CreatePostModal from '../CreatePostModal/CreatePostModal'

interface createPostProps {
    userData: any
}

const CreatePost: FC<createPostProps> = ({ userData }) => {
    const postImage = '/images/userImg.jpg'

    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    return (
        <CreatePostCardStyle>
            <CreatePostField>
                <div className="image">
                    <img src={postImage} />
                </div>
                <div className="input-field" onClick={() => setOpen(true)}>
                    What's on your mind, Anees?
                </div>
            </CreatePostField>
            <CreatePostContent>
                <div className="react-item">
                    <i className="fa fa-video-camera live-video" aria-hidden="true"></i>
                    <span>Live Video</span>
                </div>
                <div className="react-item">
                    <i className="fa fa-file-image-o photo" aria-hidden="true"></i>
                    <span>Photo/video</span>
                </div>
                <div className="react-item">
                    <i className="fa fa-smile-o feeling" aria-hidden="true"></i>
                    <span>Feeling/activity</span>
                </div>
            </CreatePostContent>
            <CreatePostModal open={open} setOpen={setOpen} loading={loading} setLoading={setLoading} userData={userData} />
        </CreatePostCardStyle>
    )
}

export default CreatePost
