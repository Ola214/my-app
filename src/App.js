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

  deleteArticleHandler = (articleIndex) => {
    // const articles = this.state.articles.slice();
    const articles = [...this.state.articles];
    articles.splice(articleIndex,1); //jeden element usuwasz
    this.setState({articles: articles});
  }

  render() {
    let articles = null;
    if(this.state.showArticles){
      articles = this.state.articles.map((article, index) =>{
        return(<Article title={article.title} content={article.content} deleteClick={() => this.deleteArticleHandler(index)}/>);
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