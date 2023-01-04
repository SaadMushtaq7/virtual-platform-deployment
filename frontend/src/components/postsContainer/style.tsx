import styled from 'styled-components'
import { Virtuoso as InfinitePosts } from 'react-virtuoso'
export const PostContainerStyle = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0 0 40px;
    }
`

export const VirtualPostsContainerStyle = styled(InfinitePosts)<any>`
    width: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`
