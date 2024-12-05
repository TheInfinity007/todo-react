import React, { useState } from 'react';

const NewTodoForm = (props: { addTodo: Function}) => {
    const { addTodo } = props;

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description && assigned) {
            addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    };

    return (
        <div className="mt-5">
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={(e) => {
                            setAssigned(e.target.value);
                        }}
                        value={assigned}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        required
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default NewTodoForm;
