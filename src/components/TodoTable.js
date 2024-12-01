import TodoRowItem from './TodoRowItem';

const TodoTable = (props) => {
    const todos = props.todos;

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <TodoRowItem
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;
