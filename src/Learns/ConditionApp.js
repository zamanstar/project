import React from 'react';
import './App.css';
import Card from '../Components/Card';


class App extends React.Component{

    state = {
        articles : [
          {id : 1 , title : 'article 1' , body : 'this is article 1 '},
          {id : 2 , title : 'article 2' , body : 'this is article 2 '},
          {id : 3 , title : 'article 3' , body : 'this is article 3 '},
        ],
        title : 'this is roocket',
        loading : false
      }

  

    loadMore = () =>{  

        this.setState({ loading : true})
        setTimeout(() => {
             let articles = [
                {id : 4 , title : 'article 4' , body : 'this is article 4 '},
                {id : 5 , title : 'article 5' , body : 'this is article 5 '},
                {id : 6 , title : 'article 6' , body : 'this is article 6 '},
              ]

              this.setState(prevState => {
                return {
                    articles : [...prevState.articles , ...articles],
                    loading : false
                }
            })
        }, 3000);
    
    }

    render(){
       console.log(this.state);
       let articleList = this.state.articles.map((article , index) => <Card key={index} title={article.title} body={article.body}></Card>)


       return(
            <div className = "app">
                
                { articleList}

                {this.state.loading
                    ?  <div>Loading...</div>
                    : null
                    }
           
            <button onClick = {this.loadMore}>load more</button>
           </div>
       )

    };
}


export default App;