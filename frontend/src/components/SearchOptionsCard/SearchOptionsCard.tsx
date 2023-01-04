import React, { FC, useState, useEffect, useCallback } from 'react'
import { Bar, SearchOptionCardContainer, OptionsBarContainer } from './styles'

interface SearchOptionsCardProps {
    title: string
    totalPeople: {
        profileImage: string
        username: string
        workAt: string
        place: string
        studiedAt: string
        work: string
        studied: string
    }[]
}

const SearchOptionsCard: FC<SearchOptionsCardProps> = ({ title, totalPeople }) => {
    const [graphData, setGraphData] = useState<{ value: string; count: number }[]>([])

    const calculateData = useCallback(() => {
        const count = {}
        for (const element of totalPeople) {
            if (title === 'Where they live') {
                if (count[element.place]) {
                    count[element.place] += 1
                } else {
                    count[element.place] = 1
                }
            } else if (title === 'Where they studied') {
                if (count[element.studiedAt]) {
                    count[element.studiedAt] += 1
                } else {
                    count[element.studiedAt] = 1
                }
            } else if (title === 'What they studied') {
                if (count[element.studied]) {
                    count[element.studied] += 1
                } else {
                    count[element.studied] = 1
                }
            } else if (title === 'What do they do') {
                if (count[element.work]) {
                    count[element.work] += 1
                } else {
                    count[element.work] = 1
                }
            }
        }
        const peopleFilteredData: [string, number][] = Object.entries(count)
        const temp = []
        for (let i = 0; i < peopleFilteredData.length; i++) {
            temp.push({ value: peopleFilteredData[i][0], count: (peopleFilteredData[i][1] / totalPeople.length) * 100 })
        }
        setGraphData(temp)
    }, [totalPeople, title])

    useEffect(() => {
        calculateData()
    }, [calculateData])
    return (
        <SearchOptionCardContainer>
            <h3>{title}</h3>
            <OptionsBarContainer>
                {graphData &&
                    graphData.map((data) => (
                        <span key={data.value}>
                            <p>{data.value}</p>
                            <Bar>
                                <div className="progress-done" style={{ width: `${data.count}%` }}>{`${data.count}%`}</div>
                            </Bar>
                        </span>
                    ))}
            </OptionsBarContainer>
        </SearchOptionCardContainer>
    )
}

export default SearchOptionsCard
