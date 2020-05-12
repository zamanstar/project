import React from 'react';
import '../App.css';
import CardItem from '../components/LifeCycleCard';
import MyAlert  from '../components/Alert';
import {Carousel} from 'react-bootstrap'


class App extends React.Component{

    state = {
        articles : [
          {id : 1 , title : 'article 1' , body : 'this is article 1 '},
          {id : 2 , title : 'article 2' , body : 'this is article 2 '},
          {id : 3 , title : 'article 3' , body : 'this is article 3 '},
        ],
        title : 'this is roocket',
        alert : {
          show : true
        }
      }

  //hi
    
  setShow(status){
    console.log(status, this);
      this.setState(prevState => {
        return {
          alert : {
            show : status
          }
        }
      }) 
  } 

  componentDidMount(){
    console.log('[App.js] run in componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] run in componentDidUpdate');
  }

  static getDerivedStateFromProps(props , state)
  {
    console.log('[App.js] run in getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(props , state){
    console.log('[App.js] run in shouldComponentUpdate');
    return true;
 }


    render(){
        
      console.log('[App.js] run in render');

       let articleList = this.state.articles.map((article , index) => <CardItem key={index} title={article.title} body={article.body}></CardItem>)  ;

       let {alert} = this.state;

       return(
            <div className = "app">

              
      
                <div className='container'>
                <MyAlert show={alert.show} setShow={this.setShow.bind(this)}/>
                  <div >
                  { articleList}       
                  </div> 
                  <button 
               >load more</button>
                </div>        
    
              
  
           </div>
       )

    };
}


export default App;