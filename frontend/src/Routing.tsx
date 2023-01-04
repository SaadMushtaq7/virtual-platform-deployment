import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'
import CompanyPage from './components/CompanyPage/CompanyPage'
import PostsContainer from './components/postsContainer/PostsContainer'
import SearchPage from './components/SearchPage/SearchPage'
import SignIn from './components/signin/SignIn'
import SignUp from './components/signup/SignUp'
import StoryPreview from './components/StoryPreview/StoryPreview'
function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/home"
                    element={
                        <>
                            <PostsContainer />
                            <BottomNavBar />
                        </>
                    }
                />
                <Route path="/story" element={<StoryPreview />} />
                <Route
                    path="/companies"
                    element={
                        <>
                            <SearchPage />
                            <BottomNavBar />
                        </>
                    }
                />
                <Route
                    path="/company/homepage"
                    element={
                        <>
                            <CompanyPage />
                            <BottomNavBar />
                        </>
                    }
                />
            </Routes>
        </Router>
    )
}

export default Routing
