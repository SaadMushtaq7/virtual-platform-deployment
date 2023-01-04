import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Tag } from 'antd'
import { PeopleContainer, PeopleYouMayKnowContainer, SearchOptionsContainer, TagsContainer, TagsInputField } from './styles'
import { data } from '../../dummyData/peopleData'
import SearchOptionsCard from '../SearchOptionsCard/SearchOptionsCard'
import PeopleCard from '../PeopleCard/PeopleCard'

const filteredCategories = ['Where they live', 'Where they studied', 'What they studied', 'What do they do']

const PeopleAtWork = (companyName: any) => {
    const employees = data.filter(item=> item.workAt.toLowerCase() === companyName.companyName.toLowerCase())
    const TAGS = useRef<string[]>([])
    const [singleTag, setSingleTag] = useState<string>('')
    const [searchedResults, setSearchedResults] = useState<
        {
            profileImage: string
            username: string
            workAt: string
            place: string
            studiedAt: string
            work: string
            studied: string
        }[]
    >(employees)

    const submitAndSearchTag = () => {
        TAGS.current.push(singleTag)

        const tempData = []
        searchedResults.map((searchedData) => {
            const regex = new RegExp(singleTag, 'i')
            const { username, place, studiedAt, studied, work } = searchedData
            if (regex.test(username) || regex.test(place) || regex.test(studiedAt) || regex.test(studied) || regex.test(work)) {
                tempData.push(searchedData)
            }
        })

        setSearchedResults(tempData)
        setSingleTag('')
    }

    const onCloseTag = (removedTagIndex: number) => {
        TAGS.current.splice(removedTagIndex, 1)
        const tempData = []

        if (TAGS.current.length < 1) {
            setSearchedResults(employees)
        } else {
            for (let i = 0; i < TAGS.current.length; i++) {
                employees.map((searchedData) => {
                    const regex = new RegExp(TAGS.current[i], 'i')
                    const { username, place, studiedAt, studied, work } = searchedData
                    if (
                        regex.test(username) ||
                        regex.test(place) ||
                        regex.test(studiedAt) ||
                        regex.test(studied) ||
                        regex.test(work)
                    ) {
                        tempData.push(searchedData)
                    }
                })
            }
            setSearchedResults(tempData)
        }
    }

    return (
        <PeopleContainer>
            <TagsInputField>
                <h3>{`${searchedResults.length} Employees`}</h3>
                <input
                    placeholder="Search employees by title, keyword or school"
                    value={singleTag}
                    onChange={(e) => setSingleTag(e.target.value)}
                />
                <button onClick={submitAndSearchTag}>Enter Tag</button>
            </TagsInputField>
            <TagsContainer>
                {TAGS.current &&
                    TAGS.current
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .map(
                            (tag, i) =>
                                tag.length > 0 && (
                                    <Tag
                                        key={uuidv4()}
                                        className="searchedTags"
                                        closable
                                        onClose={() => onCloseTag(i)}
                                        color="#057642"
                                    >
                                        {tag}
                                    </Tag>
                                )
                        )}
            </TagsContainer>
            <SearchOptionsContainer>
                {filteredCategories.map((category) => (
                    <SearchOptionsCard key={category} title={category} totalPeople={searchedResults} />
                ))}
            </SearchOptionsContainer>
            <h3 className="peopleYouKnow">People you may know</h3>
            <PeopleYouMayKnowContainer>
                {searchedResults.map((employee) => (
                    <PeopleCard
                        key={uuidv4()}
                        name={employee.username}
                        userImage={employee.profileImage}
                        work={employee.work}
                        workAt={employee.workAt}
                    />
                ))}
            </PeopleYouMayKnowContainer>
        </PeopleContainer>
    )
}

export default PeopleAtWork
