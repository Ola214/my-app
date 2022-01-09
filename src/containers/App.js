import React, {Component} from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';

class App extends Component {

  state = {
    employees: [{name: 'Employee1'}, {name: 'Employee2'}, {name: 'Employee3'}]
  }

  
  render() {

    return (
        <div className="App">
          <h1>Employees</h1>
          <Employees employees={this.state.employees} />
        </div>
    );
  }
}

//npm install --save prop-types

export default App;