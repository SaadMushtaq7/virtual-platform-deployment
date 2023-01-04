import { useAtom } from 'jotai'
import React, { FC, useState } from 'react'
import { searchItem } from '../../store'
import { SearchBarContainer } from './styles'

const SearchBar: FC = () => {
    const [item, setItem] = useAtom(searchItem)

    return (
        <SearchBarContainer>
            <input type="text" placeholder="Search..." value={item} onChange={(e) => setItem(e.target.value)} />
            <button type="button">Search</button>
        </SearchBarContainer>
    )
}

export default SearchBar
