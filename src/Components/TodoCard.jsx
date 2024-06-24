import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Modal from './addTaskModal';


const TodoCard = () => {
   
    //modal functions
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    //todos functions
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedtodos = localStorage.getItem('todos');
        if(storedtodos){
            setTodos(JSON.parse(storedtodos));
        }
    }, []);

    const addTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const todo = Object.fromEntries(formData.entries())['newTask']
        const updatedtodos = [...todos, { text: todo, completed: false }];
        setTodos(updatedtodos);
        localStorage.setItem('todos', JSON.stringify(updatedtodos));
        form.reset();
    }

    const toggleTodo = (todo) => {
        const updatedtodos = todos.map(t => t === todo ? {...t , completed: !t.completed} : t);

        setTodos(updatedtodos);
        localStorage.setItem('todos', JSON.stringify(updatedtodos));
    }
    
    return (
        <div className='card'>
            <Header/>
            <ul className="list">
                {todos.map((todo, index) => (
                    <TodoItem 
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </ul>
            <Footer onClick={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal} addTask={addTask} />

        </div>
    );
};

export default TodoCard;