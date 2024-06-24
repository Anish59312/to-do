import React from 'react';

const TodoItem = ({todo, toggleTodo }) => {
    return (
        <li className='listItem'>
            <span>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)}/>
                {todo.completed ? (
                    <span><strike>{todo.text}</strike></span>
                ) : (
                    <span>{todo.text}</span>
                )}
            </span>
            <span>...</span>
        </li>
    );
};

export default TodoItem;

