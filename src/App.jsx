const list = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
    {
        title: "Svelte",
        url: "https://svelte.dev/",
        author: "Rich Harris",
        num_comments: 3,
        points: 4,
        objectID: 2,
    },
    {
        title: "Vue",
        url: "https://vuejs.org/",
        author: "Evan You",
        num_comments: 3,
        points: 4,
        objectID: 3,
    },
    {
        title: "Angular",
        url: "https://angular.io/",
        author: "Misko Hevery",
        num_comments: 3,
        points: 4,
        objectID: 4,
    }
];

const App = () => {
    return (
        <div>
            <h1>My Hacker Stories</h1>

            <Search />

            <hr />

            <List />

            <hr />
            <List />

        </div>
    );
}


const Search = () => {

    function handleChange(event) {
        // synthetic event
        console.log(event);
        //value of target (input of the HTML element)
        console.log(event.target.value);
    }

    function handleFocus(event) {
        console.log(event.target.style.background = 'lightgrey')
    }

    function handleBlur(event) {
        // synthetic event
        console.log(event);
        //value of target (input of the HTML element)
        console.log(event.target.style.background = '');
    }


    return (
        <>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
        </>
    )

}

const List = () => {
    return (
        <ul>
            {list.map((item) => {
                return (
                    <li key={item.objectID}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                );
            })}
        </ul>
    )

}

export default App;
