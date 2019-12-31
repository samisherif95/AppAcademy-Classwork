import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo} from './actions/todo_actions'
import App from './components/app';
import {allTodos} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos;
    ReactDom.render(<Root store={store}/>,root)
});