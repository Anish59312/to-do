import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <li className='listItem'>
            <span>
                <input type="checkbox"/>  
                <span>{todo}</span>
            </span>
            <p>...</p>
        </li>
    );
};

export default TodoItem;

