import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
        { rowNumber: 1, rowDescription: 'Feed Dog', rowAssigned: 'User One' },
        {
            rowNumber: 2,
            rowDescription: 'Water Plants',
            rowAssigned: 'User Two',
        },
        {
            rowNumber: 3,
            rowDescription: 'Make dinner',
            rowAssigned: 'User One',
        },
        {
            rowNumber: 4,
            rowDescription: 'Charge phone battery',
            rowAssigned: 'User Three',
        },
    ]);

    const addTodo = (description: string, assigned: string) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }

        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned,
        };
        setTodos((todos) => [...todos, newTodo]);
    };

    const deleteTodo = (deleteTodoRowNumnber: number) => {
        let filtered = todos.filter(
            (todo) => todo.rowNumber !== deleteTodoRowNumnber
        );
        setTodos(filtered);
    };

    return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">Your Todo's</div>
                <div className="card-body">
                    <TodoTable todos={todos} deleteTodo={deleteTodo} />
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowAddTodoForm(!showAddTodoForm)}
                    >
                        {showAddTodoForm ? 'Close New Todo': 'New Todo'}
                    </button>

                    {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
                </div>
            </div>
        </div>
    );
}

export default App;
