import React from 'react'
import TodosContext from '../../context/todos.context'

const todo = (props) => {

    const todoItem = (todoArray, id) => {
        const todo = todoArray.find((todo) => todo.id == props.id);
        return <div>{todo.description}</div>
    }

    return <TodosContext.Consumer>
        {(context) => {
            return todoItem(context.todos, props.id)
        }}
    </TodosContext.Consumer>
}

export default todo;
