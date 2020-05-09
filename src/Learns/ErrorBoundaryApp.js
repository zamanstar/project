import React from 'react';
import '../App.css';
import CardItem from '../components/BootstrapCard';
import ErrorBoundary from '../components/errors/ErrorBoundary'



class App extends React.Component{

    state = {
        articles : [
          {id : 1 , title : 'article 1' , body : 'this is article 1 '},
          {id : 2 , title : 'article 2' , body : 'this is article 2 '},
          {id : 3 , title : 'article 3' , body : 'this is article 3 '},
        ],
        title : 'this is roocket',
        loading : false, 
        btnHover: false
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

    mouseEnter = (e)=>{
       this.setState({
         btnHover : true
       })
    }

    mouseLeave = (e)=> {
      this.setState({
        btnHover : false
      })
   }
    

    render(){
       console.log(this.state);
       let articleList = this.state.articles.map((article , index) => 
       <ErrorBoundary>
         <CardItem key={index} title={article.title} body={article.body}></CardItem>
       </ErrorBoundary>)  ;
       let btnclasses = ['btn-more']

       if(this.state.btnHover) {
         btnclasses.push('active')
       } 
       console.log(btnclasses)
       return(
            <div className = "app">

                <div className='container'>
                  <div class="row">
                  { articleList}       
                  </div> 
                </div>
                {this.state.loading
                      ?  <div>Loading...</div>
                      : null 
                      }
               <button 
               className={btnclasses.join(' ')}
               onClick = {this.loadMore} 
               onMouseEnter={this.mouseEnter}
               onMouseLeave={this.mouseLeave}
               >load more</button>
              
  
           </div>
       )

    };
}


export default App;