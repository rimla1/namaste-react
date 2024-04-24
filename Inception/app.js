const heading = React.createElement("h1", {id: "heading"}, "Hello world from React")
const heading2 = React.createElement("p", {id: "heading2"}, "Best Course Ever!")
const root = ReactDOM.createRoot(document.getElementById("root"))

const parentElement = React.createElement("div",{id: "parentElement"}, heading, heading2)
console.log(parentElement)

root.render(parentElement)