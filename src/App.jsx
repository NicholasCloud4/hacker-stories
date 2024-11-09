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

    const [searchTerm, setSearchTerm] = React.useState('React');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedStories = stories.filter((story) => {
        return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <Search onSearch={handleSearch} search={searchTerm} />

            <hr />

            <List list={searchedStories} />
        </div>
    );
};

const Search = ({ search, onSearch }) => {
    // const { search, onSearch } = props

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={search} onChange={onSearch} />

            <p>
                Searching for <strong>{search}</strong>.
            </p>
        </div>
    );
};

const List = ({ list }) => (
    <ul>
        {list.map(({ objectID, ...item }) => (
            <Item key={objectID} {...item} />
        ))}
    </ul>
);

const Item = ({ title, url, author, num_comments, points }) => (
    <li>
        <span>
            <a href={url}>{title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>
);

export default App;
