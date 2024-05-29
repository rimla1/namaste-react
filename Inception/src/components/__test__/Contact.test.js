import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'


describe("Contact Component Test Case", () => {
    it("Should render heading in Contact Component", () => {
        render(<Contact />)
    
        const heading = screen.getByRole('heading')
    
        expect(heading).toBeInTheDocument()
    })
    
    it("Should render button in Contact Component", () => {
        render(<Contact />)
    
        const button = screen.getByRole('button')
    
        expect(button).toBeInTheDocument()
    })
    
    it("Should render input name in Contact Component", () => {
        render(<Contact />)
    
        const placeholder = screen.getByPlaceholderText('Message')
    
        expect(placeholder).toBeInTheDocument()
    })
    
    it("Should render two inputs in Contact Component", () => {
        render(<Contact />)
    
        const inputs = screen.getAllByRole('textbox')
    
        expect(inputs.length).toBe(2)
    })
})