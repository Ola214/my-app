import React, {Component} from 'react';
import './App.css'
import Article from './Article/Article'

class App extends Component {

  state = {
    articles: [
      {id: 'ssdw12', title: "title1", content: "This is content 1"},
      {id: 'ss2dw12', title: "title2", content: "This is content 2"},
      {id: 'ssedw12', title: "title3", content: "This is content 3"},
      {id: 'ssddw12', title: "title4", content: "This is content 3"}
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

    const buttonStyle = {
      backgroundColor: 'white',
      border: '2px solid #326647',
      color: 'black',
      padding: '10px 16px',
      textAlign: 'center',
      fontSize: '20px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '10px'
    };

    let articles = null;

    if(this.state.showArticles){
      articles = this.state.articles.map((article, index) =>{
        return(<Article 
          title={article.title} 
          content={article.content} 
          deleteClick={() => this.deleteArticleHandler(index)}
          key={article.id}
          />);
      });
      buttonStyle.border = '2px solid red';
    }
    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica

      <div className="App">
        <button 
          style={buttonStyle} 
          onClick={this.toggleArticlesHandler}>
          Toggle articles</button>
        {articles}
      </div>
      
    );
  }
}

export default App;