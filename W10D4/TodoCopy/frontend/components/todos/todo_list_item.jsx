import React from 'react';

const TodoListItem = ({ todo }) => (
    <li>
        <ul>
            <li>{ todo.title }</li>
            <li>{ todo.body }</li>
        </ul>
    </li>
)

export default TodoListItem;