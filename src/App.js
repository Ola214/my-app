import React, {Component} from 'react';
import './App.css'
import Article from './Article/Article'
import styled from 'styled-components'


const StyledButton = styled.div`
  background-color: white;
  border: 2px solid #326647;
  color: black;
  padding: 10px 16px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #326647;
    color: white;
  }
`;

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
      buttonStyle.transitionDuration = '0.4s';
      buttonStyle[':hover'] = {
        backgroundColor: 'red',
        color: 'white'
      }
    }

    //let articleStyles = ['OrangeArticles','OneArticle'].join(' '); //łączenie elementów tabilcy w jednego stringa oddzielonego spacją

    const articleStyles = [];

    if(this.state.articles.length === 1){
      articleStyles.push('OneArticle');
    }

    if(this.state.articles.length >= 4) {
      articleStyles.push('GreenArticles');
    } else {
      articleStyles.push('OrangeArticles');
    }

    //kod jsx
    return (
      // //inny sposób tworzenia zawartości komponentu
      // React.createElement('div', null, React.createElement('h1', {className: 'Red-color'}, 'Hello, I am react App')) //typ, obiekt,potomek rodzica
        <div className="App">
          <StyledButton 
            onClick={this.toggleArticlesHandler}>
            Toggle articles</StyledButton>
          <div className={articleStyles.join(' ')}>
            {articles}
          </div>
        </div>
    );
  }
}

export default App;