import React, {Component} from 'react';
import './App.css'
import User from './User/User'
import Customer from './Customer/Customer'

class App extends Component {


  active = "Active";
  inactive = "Inactive";

  state = {
    username: "Szymon1",
    role: "admin",
    active: true
  }

  onCopyHandler = () => {
    console.log("onCopyHandler");
  }

  onMouseEnter = () => {
    console.log("onMouseEnter");
  }

  onMouseLeave = () => {
    console.log("onMouseLeave");
  }

  setUserDataHandler = () => {
    console.log("triggering setUserDataHandler");
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;
    const active = document.getElementById("active").checked;

    this.setState(
      {
        username: username,
        role: role,
        active: active
      }
    );

  }

  render() {

    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <h1 className='Red-color' onCopy={this.onCopyHandler} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Hello, I am a react App</h1>
        <p>Paragraf tekstowy</p>
        <div className="Form-container">
          <label className="Form-label">Username</label>
          <input className="Form-element" type="text" id="username" />
          <label className="Form-label">Role</label>
          <input className="Form-element" type="text" id="role" />
          <label className="Form-label">Active</label>
          <input className="Form-element" type="checkbox" id="active" />

 
        </div>
        <User username={this.state.username} role={this.state.role} buttonClick={() => this.setUserDataHandler()}>{this.state.active ? this.active : this.inactive}</User>
        <Customer />
      </div>
    );
  }
}

export default App;