import React from 'react';

const TodoRowItem = (props: {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;
    deleteTodo: Function;
}) => {
    const { rowNumber, rowDescription, rowAssigned } = props;

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    );
};

export default TodoRowItem;
