import * as React from 'react';

const initialStories = [
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

const getAsyncStories = () =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve({ data: { stories: initialStories } }),
            2000
        )
    );

const useStorageState = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    )

    React.useEffect(() => {
        localStorage.setItem(key, value);
        console.log('Updated searchTerm:', value);
    }, [value, key]);

    return [value, setValue];
}

const App = () => {
    const [searchTerm, setSearchTerm] = useStorageState(
        'search',
        'React'
    );

    const [isLoading, setIsLoading] = React.useState(false);
    const [stories, setStories] = React.useState([]);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        getAsyncStories().then(result => {
            setStories(result.data.stories);
            setIsLoading(false);
        })
            .catch(() => setIsError(true))
    }, []);

    const handleRemoveStory = (item) => {
        const newStories = stories.filter(
            (story) => item.objectID !== story.objectID
        );

        setStories(newStories);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedStories = stories.filter((story) =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <InputWithLabel
                id="search"
                value={searchTerm}
                isFocused
                onInputChange={handleSearch}
            >
                <strong>Search:</strong>
            </InputWithLabel>

            <hr />

            {isError && <h1>Something went wrong.</h1>}


            {isLoading ? <h1>Loading...</h1> :
                <List list={searchedStories} onRemoveItem={handleRemoveStory} />
            }
        </div>
    );
};

const InputWithLabel = ({
    id,
    value,
    type = 'text',
    onInputChange,
    isFocused,
    children,
}) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input
                ref={inputRef}
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
            />
        </>
    );
};

const List = ({ list, onRemoveItem }) => (
    <ul>
        {list.map((item) => (
            <Item
                key={item.objectID}
                item={item}
                onRemoveItem={onRemoveItem}
            />
        ))}
    </ul>
);

const Item = ({ item, onRemoveItem }) => (
    <li>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
            <button type="button" onClick={() => onRemoveItem(item)}>
                Dismiss
            </button>
        </span>
    </li>
);

export default App;
