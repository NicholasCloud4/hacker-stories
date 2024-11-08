import * as React from 'react';

const App = () => {
    const stories = [
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
    console.log("APP RENDERS");

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <Search />

            <hr />

            <List list={stories} />

            {/* <hr />
            <List /> */}

        </div>
    );
}

const Search = () => {
    console.log("SEARCH RENDERS");
    const [searchTerm, setSearchTerm] = React.useState('');


    function handleChange(event) {

        // synthetic event
        console.log(event);
        //value of target (input of the HTML element)
        console.log(event.target.value);

        setSearchTerm(event.target.value);


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

            <p>{searchTerm}</p>

        </>
    )

}

const List = (props) => {
    console.log("LIST RENDERS");
    return (
        <ul>
            {props.list.map((item) => {
                return <Item key={item.objectID} item={item} />
            })}
        </ul>
    )

}

function Item(props) {
    console.log("ITEM RENDERS");
    return (
        <li key={props.item.objectID}>
            <span><a href={props.item.url}>{props.item.title}</a></span>
            <span>{props.item.author}</span>
            <span>{props.item.num_comments}</span>
            <span>{props.item.points}</span>
        </li>
    )
}

export default App;
