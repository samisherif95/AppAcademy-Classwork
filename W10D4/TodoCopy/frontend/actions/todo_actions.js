//the first action will receive todos and populate store

//the second will receive a single todo and either add or update asingel todo in the store


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = todos => ({
    type : RECEIVE_TODOS,
    todos
})

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo  
})