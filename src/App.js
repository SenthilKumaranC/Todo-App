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

  state = {
    list: [
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
        {this.state.list.map((item) => <div key={item.id}>{item.description}</div>)}
      </div>
    );
  }

}

export default App;
