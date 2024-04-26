import ReactDOM from 'react-dom/client'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById("root"))
const heading = React.createElement("h1", {id: "heading"}, "Rimla Red")

const headingJSX = <h1 className='heading'>Hello from JSX!</h1>

root.render(headingJSX)