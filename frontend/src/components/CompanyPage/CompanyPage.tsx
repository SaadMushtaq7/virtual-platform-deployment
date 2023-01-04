import React, { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Tabs } from 'antd'
import { IoMdAdd } from 'react-icons/io'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import RecentPostCard from '../RecentPosts/RecentPostCard/RecentPostCard'
import PeopleAtWork from '../PeopleAtWork/PeopleAtWork'
import { data } from '../../dummyData/postData'
import {
    ButtonContainer,
    CompanyDetailsContainer,
    CompanyDisplayImages,
    CompanyMainPage,
    CompanyPageContainer,
    PageOptionsContainer,
    RecentPostContainer,
    RecentPostsDisplay
} from './styles'

const CompanyPage: FC = () => {
    const [pageOptions, setPageOptions] = useState<string>('about')
    const [showMore, setShowMore] = useState<boolean>(false)
    const recentPosts = data.slice(0, 8)
    const location = useLocation()
    const { displayImage, coverImage, companyName, companyAddress, companyFollower, companyAbout } = location.state

    const { TabPane } = Tabs
    return (
        <CompanyPageContainer>
            <CompanyMainPage>
                <CompanyDisplayImages>
                    <span className="coverPicContainer">
                        <img className="coverPic" src={coverImage} alt="cover" />
                    </span>
                    <img className="displayPic" src={displayImage} alt="display" />
                </CompanyDisplayImages>
                <CompanyDetailsContainer>
                    <h4 className="companyName">{companyName}</h4>
                    <p className="companyAddress">{companyAddress}</p>
                    <p className="companyFollower">{companyFollower}</p>

                    <ButtonContainer>
                        <button className="followCompanyButton">
                            <IoMdAdd />
                            <span>Follow</span>
                        </button>
                        <button className="websiteCompanyButton">
                            <span>Go to Website</span>
                            <BsBoxArrowUpRight />
                        </button>
                        <button className="moreCompanyButton">More</button>
                    </ButtonContainer>
                </CompanyDetailsContainer>
            </CompanyMainPage>

            <PageOptionsContainer>
                <Tabs>
                    <TabPane tab="About" key="1">
                        <span>
                            <h2>About</h2>
                            <p className="companyAbout">
                                {showMore ? companyAbout : `${companyAbout.substring(0, 208)}...`}
                                <span onClick={() => setShowMore(!showMore)}>{showMore ? '  Show less' : '  Show more'}</span>
                            </p>
                        </span>
                    </TabPane>
                    <TabPane tab="Address" key="2">
                        <span>
                            <h2>Address</h2>
                            <p className="companyAddress">{companyAddress}</p>
                        </span>
                    </TabPane>
                    <TabPane tab="Hashtags" key="3">
                        <span>
                            <h2>Hashtags</h2>
                            <p className="companyHashtags">#facebook #virtialReality #hiring #diversity</p>
                        </span>
                    </TabPane>
                    <TabPane tab="Peoples" key="4">
                        <h2>People</h2>
                        <br />
                        <PeopleAtWork companyName={companyName} />
                    </TabPane>
                </Tabs>
            </PageOptionsContainer>
            <RecentPostContainer>
                <h2>Recent Posts</h2>
                <RecentPostsDisplay>
                    {recentPosts &&
                        recentPosts.map((post) => (
                            <span key={uuidv4()} className="recentPost">
                                <RecentPostCard data={post} />
                            </span>
                        ))}
                </RecentPostsDisplay>
            </RecentPostContainer>
        </CompanyPageContainer>
    )
}

export default CompanyPage
