import React, {Component} from 'react';
import './App.css'
import User from './User/User'

class App extends Component {


  active = "Active";
  inactive = "Inactive";

  state = {
    username: "Szymon1",
    role: "admin",
    active: true
  }

  render() {

    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <h1 className='Red-color'>Hello, I am a react App</h1>
        <p>Paragraf tekstowy</p>
        <div className="Form-container">
          <label className="Form-label">Username</label>
          <input className="Form-element" type="text" id="username" />
          <label className="Form-label">Role</label>
          <input className="Form-element" type="text" id="role" />
          <label className="Form-label">Active</label>
          <input className="Form-element" type="checkbox" id="active" />
          <button className="Form-button">Show user</button>
        </div>
        <User username={this.state.username} role={this.state.role}>{this.state.active ? this.active : this.inactive}</User>
      </div>
    );
  }
}

export default App;