import ReactDOM from 'react-dom/client'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById("root"))
// const heading = React.createElement("h1", {id: "heading"}, "Rimla Red")
// const headingJSX = <h1 className='heading'>Hello from JSX!</h1>

const comment = "Very Good Book!"

const Title = () => {
    return (
        <div className='title'>
            <h1>One Piece</h1>
        </div>
    )
}

const Description = () => {
    return(
        <div className="description">
            <p>Luffy went on Sea adventure to become a king of pirates</p>
        </div>
    )
}

const Book = () => {
    return (
        <div className='container'>
            <Title />
            <Description />
            <p>{comment}</p>
        </div>
    )
}


root.render(<Book />)