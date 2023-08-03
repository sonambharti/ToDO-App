import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';


let nextId = 2;
const initialTodos = [
    {id: 1, text: "Apply Job", done: false},
//   {id: 2, text: "Learn React", done: true},
//   {id: 3, text: "Learn Node", done: false},
];

function todosReducer(todos, action) {
    const { type } = action;
    switch (type) {
        case "add":
            const { id, text } = action;
            return [...todos, {id, text, done: false}];
        case "change":
            const updatedTodo = action.todo;
            return todos.map((existingTodo) => {
                if (existingTodo.id === updatedTodo.id){
                    return updatedTodo;
                }else{
                    return existingTodo;
                }    
            })
        case "remove":
            const todoId = action.id;
            return todos.filter((todo) => todo.id !== todoId);
            
    }
}

function TodoApp() {

    // const [todos, setTodos] = useState(initialTodos);
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    
    function handleAddTodo(text) {
        dispatch({
            type: "add",
            id: nextId++,
            text,
        });
        
    }

    function handleTodoChange(updatedTodo) {
        dispatch({
            type: "change",
            todo: updatedTodo,
        });
        
    }


    function handleTodoDelete(todoId) {
        dispatch({
            type: "remove",
            id: todoId,
        });
        
    }


  return (
    <div className='todo-app'>
        <h2>Todos</h2>
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete}/>
    </div>
  )


}

export default TodoApp;