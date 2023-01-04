import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { CompanyCardContainer, CompanyCardOptions, CompanyInfoContainer } from './styles'

interface CompanyCardProps {
    displayImage: string
    coverImage: string
    companyName: string
    companyAddress: string
    companyFollower: string
    companyAbout: string
}

const CompanyCard: FC<CompanyCardProps> = ({
    displayImage,
    coverImage,
    companyName,
    companyAddress,
    companyFollower,
    companyAbout
}) => {
    const navigate = useNavigate()
    return (
        <CompanyCardContainer>
            <img src={displayImage} alt="company page" />
            <CompanyCardOptions>
                <CompanyInfoContainer
                    onClick={() =>
                        navigate('/company/homePage', {
                            state: { displayImage, coverImage, companyName, companyAddress, companyFollower, companyAbout }
                        })
                    }
                >
                    <h4 className="companyName">{companyName}</h4>
                    <p className="companyAddress">{companyAddress}</p>
                    <p className="companyFollower">{companyFollower}</p>
                    <p className="companyAbout">{companyAbout}</p>
                </CompanyInfoContainer>
                <button className="followCompanyButton">Follow</button>
            </CompanyCardOptions>
        </CompanyCardContainer>
    )
}

export default CompanyCard
