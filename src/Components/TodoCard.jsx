import React from 'react';
import TodoItem from './TodoItem.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const TodoCard = () => {
    const todos = ['learn react', 'build an app', 'then enjoy'];

    return (
        <div className='card'>
            <Header/>
            <ul className="list">
                {todos.map((todo, index) => (
                    <TodoItem index={index} todo={todo}/>
                ))}
            </ul>
            <Footer/>
        </div>
    );
};

export default  TodoCard;