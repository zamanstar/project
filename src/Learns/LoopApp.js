import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
 const [stateArticle , setArticleState] = useState({
    articles : [
      {id : 1 , title : 'article 1' , body : 'this is article 1 '},
      {id : 2 , title : 'article 2' , body : 'this is article 2 '},
      {id : 3 , title : 'article 3' , body : 'this is article 3 '},
      {id : 4 , title : 'article 4' , body : 'this is article 3 '},
      {id : 5 , title : 'article 5' , body : 'this is article 3 '},
      {id : 6 , title : 'article 3' , body : 'this is article 3 '},
      {id : 7 , title : 'article 3' , body : 'this is article 3 '},
    ]
  });

  
  return (
    <div className = "app">
      {
          // stateArticle.articles.map(article =>  <Card key = {article.id} title = {article.title} body = {article.body}/>)
          stateArticle.articles.map((article,index) =>  <Card key = {index} title = {article.title} body = {article.body}/>)
      }
    </div>
  )
}


export default App;