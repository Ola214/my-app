import React, { Component } from 'react';
import './App.css';
import Employees from '../components/Employees/Employees'
import axios from 'axios';



class App extends Component {


  state = {
    employees: []
  }


  componentDidMount(){

   axios.get('http://dummy.restapiexample.com/api/v1/employees', null).then(response => {
     const employees = response.data;
     console.log(response);
    this.setState({employees: employees});
   });

  }



  render() {


    return (
      <div className='App'>
        <h1>Employees</h1>
        <Employees employees={this.state.employees} />
      </div>

    );
  }
}

export default App;