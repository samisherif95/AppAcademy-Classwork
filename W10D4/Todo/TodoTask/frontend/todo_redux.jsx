import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo} from './actions/todo_actions'
import {allTodos} from './reducers/selectors';
import Root from './components/root';
import * as TodoAPIUtil from './util/todo_api_util';

document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('content');
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    window.TodoAPIUtil = TodoAPIUtil;
    ReactDOM.render(<Root store={store}/>,root)
});