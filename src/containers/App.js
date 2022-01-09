import React, {Component} from 'react';
import './App.css';
import Employees from '../components/Employees/Employees';
import axios from 'axios'

class App extends Component {

  state = {
    employees: [{name: 'Employee1'}, {name: 'Employee2'}, {name: 'Employee3'}]
  }

  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees', null).then(response => {
      console.log(response);
    }); // null -konfiguracja , then -> gdy dostaniemy odpowiedź od serwera
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