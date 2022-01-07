import React, {Component} from 'react';
import './App.css'
import User from './User/User'

class App extends Component {
  render() {

    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <h1 className='Red-color'>Hello, I am a react App</h1>
        <p>Paragraf tekstowy</p>
        <User />
        <User />
      </div>
    );
  }
}

export default App;