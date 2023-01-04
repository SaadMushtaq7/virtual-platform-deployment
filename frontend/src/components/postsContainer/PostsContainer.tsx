import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useRequest } from 'ahooks'
import { useAtom } from 'jotai'
import CreatePost from '../posts/createPostContainer/CreatePost'
import PostCard from '../posts/postCard/PostCard'
import StoriesBar from '../StoriesBar/StoriesBar'
import NavBar from '../NavBar/NavBar'
import { postDataType } from '../../dataTypes'
import { allPosts } from '../../store'
import { PostContainerStyle, VirtualPostsContainerStyle } from './style'

function PostsContainer() {
    const [users, setUsers] = useState([])
    const [page, setpage] = useState(1)
    const location = useLocation()

    const [postData, setPostData] = useAtom(allPosts)

    const pagination = page * 10

    const fetchAllPosts = () => {
        return axios.get('http://localhost:8000/post/getAllPosts')
    }
    useRequest(fetchAllPosts, {
        onSuccess: (data) => {
            setPostData(data.data)
        }
    })

    const loadMore = useCallback(() => {
        setpage(page + 1)
    }, [page])

    useEffect(() => {
        if (postData) {
            console.log(postData)
            setUsers(postData.slice(0, pagination))
        }
    }, [page, pagination, postData])

    return (
        <PostContainerStyle>
            <NavBar userData={location.state.userData} />
            <StoriesBar />
            <CreatePost userData={location.state.userData} />
            <VirtualPostsContainerStyle
                useWindowScroll
                data={users}
                endReached={loadMore}
                itemContent={(index: number, user: string) => {
                    return <PostCard data={user} key={index} />
                }}
            />
        </PostContainerStyle>
    )
}

export default PostsContainer
