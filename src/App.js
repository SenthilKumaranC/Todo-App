import React from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar'

/*function App() {

  return (
    <div className="App">
     <Toolbar></Toolbar>

    </div>
  );

}*/

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    list: [
      {
        id: "Task1", description: "Learn React", status: "inprogress"
      },
      {
        id: "2", description: "Learn Blazor", status: "not started"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        {this.state.list.map((item) => <div>{item.description}</div>)}
      </div>
    );
  }

}

export default App;
