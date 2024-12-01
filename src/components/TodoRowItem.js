import React from 'react';

const TodoRowItem = () => {
    const rowNumber = 1;
    const rowDescriptin = 'Feed Dog';
    const rowAssigned = 'Eric';

    return (
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescriptin}</td>
            <td>{rowAssigned}</td>
        </tr>
    );
};

export default TodoRowItem;
