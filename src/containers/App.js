import React, {Component} from 'react';
import './App.css';
import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';

class App extends Component {

  //po metodzie constrctor i getDerived.. jest wywoływana funcja render

  constructor(props){
    console.log("App constructor");
    super(props);
  }

  //
  static getDerivedStateFromProps(props, state){
    console.log("App getDerivedStateFromProps")
    return state;
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App shouldComponentUpdate");
    return true;

  }

  componentDidMount() {
    //puszczanie zapytań http itp.
    //nie aktualizuj tutaj state synchronicznie
    console.log("App componentDidMount");
  }

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
    const articles = [...this.state.articles];
    articles.splice(articleIndex,1); //jeden element usuwasz
    this.setState({articles: articles});
  }

  render() {
    console.log("App render");

    let articles = null;
    if(this.state.showArticles) {
      articles = <Articles articles={this.state.articles} deleteArticle={this.deleteArticleHandler} />
    }

    //kod jsx
    return (
        
        <div className="App">
          <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandler}/>
          {articles}
        </div>
    );
  }
}

export default App;