import React, { FC } from 'react'
import { ConnectButton, PeopleCardContainer } from './styles'

interface PeopleCardProps {
    userImage: string
    name: string
    workAt: string
    work: string
}

const PeopleCard: FC<PeopleCardProps> = ({ userImage, name, workAt, work }) => {
    return (
        <PeopleCardContainer>
            <img
                src="https://images.unsplash.com/photo-1669917172469-1d9dd1e99491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt=""
            />
            <h3>{name}</h3>
            <p>{`${work} at ${workAt}`}</p>
            <ConnectButton className="connectPeopleButton">Connect</ConnectButton>
        </PeopleCardContainer>
    )
}

export default PeopleCard
