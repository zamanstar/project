import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

// function App() {
//  const [stateArticle , setArticleState] = useState({
//     articles : [
//       {id : 1 , title : 'article 1' , body : 'this is article 1 '},
//       {id : 2 , title : 'article 2' , body : 'this is article 2 '},
//       {id : 3 , title : 'article 3' , body : 'this is article 3 '},
//     ]
//   });

//   let articleList = stateArticle.articles.map((article,index) =>  <Card key = {index} title = {article.title} body = {article.body}/>)

// const loadMore = (e) => {
//   let articles = [
//     {id : 4 , title : 'article 4' , body : 'this is article 4 '},
//     {id : 5 , title : 'article 5' , body : 'this is article 5 '},
//     {id : 6 , title : 'article 6' , body : 'this is article 6 '},
//   ]

//   //stateArticle.articles.push(...articles);    -- > intori nemitooni taghit ejad koni

//   //raveshe aval
//   // setArticleState({
//   //     articles : [...stateArticle.articles,...articles]    //in 3 noghe dar javaScript spred name dare
//   //   });

//   //ravehse dovom
//   setArticleState(prevState => {
//       return {
//         articles : [...prevState.articles , ...articles]
//       }
//     });
//    }

//    console.log(stateArticle);
//   return (
//     <div className = "app">
//       {
//         articleList
//       }

//       <button onClick = {loadMore}>load more</button>
//     </div>
//   )
// }


class App extends React.Component{
  state =  {
    articles : [
      {id : 1 , title : 'article 1' , body : 'this is article 1 '},
      {id : 2 , title : 'article 2' , body : 'this is article 2 '},
      {id : 3 , title : 'article 3' , body : 'this is article 3 '},
    ]
  }

  loadMore = () => {
    console.log(this);
    let articles = [
      {id : 4 , title : 'article 4' , body : 'this is article 4 '},
      {id : 5 , title : 'article 5' , body : 'this is article 5 '},
      {id : 6 , title : 'article 6' , body : 'this is article 6 '},
    ]

    this.setState(prevState => {
      return {
        articles : [...prevState.articles , ...articles]
      }
    });
  }

  //tavajoh agar loadMore ro in tori tarif koni paeen bayad in ro bind koni:
  // loadMore() {
  //   console.log(this);
  // }

  render() {
    let articleList = this.state.articles.map((article,index) =>  <Card key = {index} title = {article.title} body = {article.body}/>)

    return (
      <div className = "app">
        {
          articleList
        }
  
        <button onClick = {this.loadMore}>load more</button>
        <button onClick = {this.loadMore.bind(this)}>load more</button>
      </div>
    )
  }
}


export default App;