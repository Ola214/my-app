import React, {Component} from 'react';
import './App.css'
import Article from './Article/Article'

class App extends Component {

  state = {
    articles: [
      {title: "title1", content: "This is content 1"},
      {title: "title2", content: "This is content 2"},
      {title: "title3", content: "This is content 3"}
    ],
    showArticles: false
  }

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});
  }



  render() {

    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <button onClick={this.toggleArticlesHandler}>Toggle articles</button>
        {this.state.showArticles ? 
          <div>
            <Article title={this.state.articles[0].title} content={this.state.articles[0].content}/>
            <Article title={this.state.articles[1].title} content={this.state.articles[1].content}/>
            <Article title={this.state.articles[2].title} content={this.state.articles[2].content}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;