import React, { FC, useState } from 'react'
import CompanyCard from '../CompanyCard/CompanyCard'
import SearchBar from '../SearchBar/SearchBar'
import { SearchPageContainer, SearchResult } from './styles'
import { data } from '../../dummyData/searchData'
import { searchItem } from '../../store'
import { useAtom } from 'jotai'

const SearchPage: FC = () => {
    const [item] = useAtom(searchItem)
    const searchedResults = []
    data.map((searchedData) => {
        const regex = new RegExp(item, 'i')
        const { companyName, companyAddress, companyAbout } = searchedData
        if (regex.test(companyName) || regex.test(companyAddress) || regex.test(companyAbout)) {
            searchedResults.push(searchedData)
        }
    })
    return (
        <SearchPageContainer>
            <SearchBar />
            <SearchResult>
                {searchedResults.length ? (
                    searchedResults.map((searchedData, index) => {
                        return (
                            <CompanyCard
                                key={index}
                                displayImage={searchedData.displayImage}
                                coverImage={searchedData.coverImage}
                                companyName={searchedData.companyName}
                                companyAddress={searchedData.companyAddress}
                                companyFollower={searchedData.companyFollower}
                                companyAbout={searchedData.companyAbout}
                            />
                        )
                    })
                ) : (
                    <div className="no-content">No Content Found with searched text</div>
                )}
            </SearchResult>
        </SearchPageContainer>
    )
}

export default SearchPage
