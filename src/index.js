import React from 'react'
import ReactDom from 'react-dom'

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>

}

const SearchPanel = () => {
    return <input placeholder='search'/>
}

const App = () => {
    return (
        <div>
            <SearchPanel/>
            <AppHeader/>
            <TodoList/>
        </div>
    )
}

ReactDom.render(<App/>,  document.getElementById('root'))