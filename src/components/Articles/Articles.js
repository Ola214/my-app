import React, {Component} from "react";
import Article from './Article/Article';

class Articles extends Component {

  // //do warunkowego zmiany stanu
  // static getDerivedStateFromProps(props, state){
  //   console.log("Articles getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Articles shouldComponentUpdate");
    if(nextProps.articles !== this.props.articles){ //!== nie != -> porównianie elementów, nie referencji
      return true;
    } else {
      return false; //jeżeli artykuły się nie zmieniły to nie renderuj
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Articles getSnapshotBeforeUpdate");
    return {message: "this is test message"}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Articles componentDidUpdate");
    console.log("snapshot message: " + snapshot.message);
  }

  render() {
    console.log("Articles render");
    console.log("articles");

    const articleStyles = [];

    if(this.props.articles.length === 1){
      articleStyles.push('OneArticle');
    }

    if(this.props.articles.length >= 4) {
      articleStyles.push('GreenArticles');
    } else {
      articleStyles.push('OrangeArticles');
    }

    const articles = this.props.articles.map((article, index) =>{
        return(<Article 
          title={article.title} 
          content={article.content} 
          deleteClick={() => this.props.deleteArticle(index)}
          key={article.id}
          />);
      });

      return (
        <div className={articleStyles.join(' ')}>
            {articles}
        </div>
      );

  }
}

export default Articles;