import  React  from 'react';
import TodosContext from '../../context/todos.context'

const addTodo = ()=>{
    
    return <TodosContext.Consumer>
        {(context) => {
            return <button onClick={()=> {context.addTodo({description:"Learn Front End",status:"new"})}}>Add Todo</button>
        }}
    </TodosContext.Consumer>
     
}

export default addTodo;