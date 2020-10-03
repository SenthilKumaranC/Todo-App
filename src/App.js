import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar'

import Todos from './components/Todos/Todos'

import TodosContext from './context/todos.context'

import AddTodo from './components/AddTodo/Add-Todo'

import { v4 as uuidv4 } from 'uuid';
 
/*function App() {

  return (
    <div className="App">
     <Toolbar></Toolbar>

    </div>
  );

}*/

class App extends React.Component {

  addTodo = (todoItem) => {
    todoItem.id = uuidv4();
    this.setState(state => ({
      todos: [...state.todos, todoItem]
    }));
  };

  state = {
    todos: [
      {
        id: "1", description: "Learn React", status: "inprogress"
      },
      {
        id: "2", description: "Learn Swift", status: "not started"
      },
      {
        id: "3", description: "Learn Flutter", status: "not started"
      },
      {
        id: "4", description: "Learn Angular", status: "not started"
      },
      {
        id: "5", description: "Learn Kotlin", status: "inprogress"
      },
      {
        id: "6", description: "Learn SpriteKit", status: "inprogress"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <TodosContext.Provider value={{ todos: this.state.todos , addTodo : this.addTodo}}>
          <Todos></Todos>
          <AddTodo></AddTodo>
        </TodosContext.Provider>
      </div>
    );
  }

}

export default App;
