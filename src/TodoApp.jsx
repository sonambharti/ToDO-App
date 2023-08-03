import React from 'react'
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';


let nextId = 2;
const initialTodos = [
    {id: 1, text: "Apply Job", done: false},
//   {id: 2, text: "Learn React", done: true},
//   {id: 3, text: "Learn Node", done: false},
];


function TodoApp() {

    const [todos, setTodos] = useState(initialTodos);
    function handleAddTodo(text) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                text,
                done: false,
            },
        ]);
    }

    function handleTodoChange(updatedTodo) {
        setTodos(
            todos.map((existingTodo) => {
                if (existingTodo.id === updatedTodo.id){
                    return updatedTodo;
                }else{
                    return existingTodo;
                }

        }));
    }


    function handleTodoDelete(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
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