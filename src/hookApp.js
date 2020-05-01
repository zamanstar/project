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
    ]
  });

  // setTimeout(() => {
      
  // }, setArticleState({
  //   articles : [
  //     {id : 3 , title : 'article 1' , body : 'this is article 4 '},
  //     {id : 4 , title : 'article 2' , body : 'this is article 5 '},
  //     {id : 5 , title : 'article 3' , body : 'this is article 6 '},
  //   ]
  // }),2000);

  // const [stateProduct , setProductState] = useState({
  //   articles : [
  //     {id : 1 , title : 'article 1' , body : 'this is article 1 '},
  //     {id : 2 , title : 'article 2' , body : 'this is article 2 '},
  //     {id : 3 , title : 'article 3' , body : 'this is article 3 '},
  //   ]
  // })

  

  return (
    <div className = "app">
      <Card title = {stateArticle.articles[0].title} body = {stateArticle.articles[0].body}/>
      <Card title = {stateArticle.articles[1].title} body = {stateArticle.articles[1].body}/>
      <Card title = {stateArticle.articles[2].title} body = {stateArticle.articles[2].body}/>
    </div>
  )
}


export default App;