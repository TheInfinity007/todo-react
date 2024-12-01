import React from 'react';

const TodoRowItem = (props) => {
    const { rowNumber, rowDescription, rowAssigned } = props;

    return (
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    );
};

export default TodoRowItem;
