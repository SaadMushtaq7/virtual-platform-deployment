import { getAllByText, render } from '@testing-library/react'
import App from '../App'

it('App: verify link text', () => {
    const { container } = render(<App />)
    const heading = getAllByText(container, 'Learn React')
    expect(heading[0]).toBeTruthy()
})
