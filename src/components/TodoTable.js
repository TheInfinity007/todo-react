import TodoRowItem from './TodoRowItem';

const TodoTable = (props) => {
    const todos = props.todos;

    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                <TodoRowItem
                    rowNumber={todos[0].rowNumber}
                    rowDescription={todos[0].rowDescription}
                    rowAssigned={todos[0].rowAssigned}
                />
                <TodoRowItem
                    rowNumber={todos[1].rowNumber}
                    rowDescription={todos[1].rowDescription}
                    rowAssigned={todos[1].rowAssigned}
                />
                <TodoRowItem
                    rowNumber={todos[2].rowNumber}
                    rowDescription={todos[2].rowDescription}
                    rowAssigned={todos[2].rowAssigned}
                />
            </tbody>
        </table>
    );
};

export default TodoTable;
