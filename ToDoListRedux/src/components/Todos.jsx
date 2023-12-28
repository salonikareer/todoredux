import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/TodoSlice';

const Todos = () => {
    const [edit, setEdit] = useState(false);
    const [editedText, setEditedText] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleEditClick = (todo) => {
        setEdit(true);
        setEditedText(todo.text);
        setEditingTodoId(todo.id);
    };

    const handleSaveClick = () => {
        dispatch(editTodo({ id: editingTodoId, text: editedText }));
        setEdit(false);
        setEditingTodoId(null);
        setEditedText('');
    };

    return (
        <>
            {todos.length > 0 &&
                todos.map((todo) => {
                    return (
                        <div >
                            {edit && editingTodoId === todo.id ? (
                                <>
                                    <input
                                        type='text'
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}

                                    />
                                    <button

                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <div className='list'>
                                    <p >{todo.text}</p>
                                    <button

                                        onClick={() => dispatch(removeTodo(todo.id))} 
                                    >
                                        Remove
                                    </button>
                                    <button

                                        onClick={() => handleEditClick(todo)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
        </>
    );
};

export default Todos;

