
// let title = "React"

let welcome = {
    title: "React",
    greeting: "Hey"
}

function getTitle(title) {
    return title;
}


const list = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
    }
]



function App() {

    return (
        <div>
            <h1>Hello {getTitle("World")}</h1>

            <ul>
                {list.map(function (item) {
                    return <li key={item.objectID}>{item.title} </li>
                })}
            </ul>

            <h1>{welcome.greeting} {welcome.title}</h1>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text"></input>
        </div>

    )
}

export default App
