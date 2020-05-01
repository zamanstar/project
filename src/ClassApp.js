import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends React.Component{
  state = {
    articles : [
      {id : 1 , title : 'article 1' , body : 'this is article 1 '},
      {id : 2 , title : 'article 2' , body : 'this is article 2 '},
      {id : 3 , title : 'article 3' , body : 'this is article 3 '},
    ]
  }

  constructor(){
    super()
    setTimeout(() => {
      
    }, this.setState({
      articles : [
        {id : 1 , title : 'article 1' , body : 'this is article 1 '},
        {id : 2 , title : 'article 2' , body : 'this is article 2 '},
        {id : 3 , title : 'article 3' , body : 'this is article 3 '},
      ]
    }),2000);
  }
}

export default App;
