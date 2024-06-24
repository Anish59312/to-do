import React from 'react';

const Modal = ({ isOpen, onClose , addTask}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-parent">
            <div className="backdrop" onClick={onClose}>
            </div>
            <div className="add-task-modal">    
                <form className="addTaskForm" onSubmit={addTask}>
                    <input
                        name="newTask"
                        type="text"
                        placeholder="Enter a new task"
                        required/>
                    <button type="submit">
                        Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;