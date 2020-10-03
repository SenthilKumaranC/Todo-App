import React from 'react'

const todosContext = React.createContext({ todos: [], addTodo: () => { } })

export default todosContext;