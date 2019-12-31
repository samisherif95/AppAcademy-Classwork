import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {todos, receiveTodo} = this.props;
        return(
            <div>
                <h1>All Todos</h1>
                <ul>
                    { 
                        todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)
                    }
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        )
    }
}

export default TodoList;