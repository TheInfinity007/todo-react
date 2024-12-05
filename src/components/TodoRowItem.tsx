import React from 'react';

export const TodoRowItem: React.FC<{
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;
    deleteTodo: Function;
}> = (props) => {
    const { rowNumber, rowDescription, rowAssigned } = props;

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    );
};
