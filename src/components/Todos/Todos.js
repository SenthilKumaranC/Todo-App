import React, { useContext } from 'react'
import TodosContext from '../../context/todos.context'

import Todo from '../Todo/Todo'

const todos = () => {

    const todoList = (todosArray) => {
        return todosArray.map(
            (todo) => <Todo key={todo.id} id={todo.id}></Todo>)
    }

    return (
        <TodosContext.Consumer>
            {(context) => {
                return todoList(context.todos)
            }}
        </TodosContext.Consumer>
    )
}

export default todos;
