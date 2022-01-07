import React, {Component} from 'react';
import './App.css'
import Article from './Article/Article'

class App extends Component {

  state = {
    articles: [
      {title: "title1", content: "This is content 1"},
      {title: "title2", content: "This is content 2"},
      {title: "title3", content: "This is content 3"},
      {title: "title4", content: "This is content 3"}
    ],
    showArticles: false
  }

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});
  }



  render() {
    let articles = null;
    if(this.state.showArticles){
      articles = this.state.articles.map(article=>{
        return(<Article title={article.title} contenr={article.content}/>);
      });
    }
    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <button onClick={this.toggleArticlesHandler}>Toggle articles</button>
        {articles}
      </div>
      
    );
  }
}

export default App;