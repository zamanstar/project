import React from 'react';
import '../App.css';
import CardItem from '../components/LifeCycleCard';
import {Carousel} from 'react-bootstrap';
import ErrorBoundary from '../components/errors/ErrorBoundary'


class App extends React.Component{


  constructor(props){
    super(props);
    console.log('[app.js] run in constructor')
  }

  //in on tavabei hast ke goftam run mishe 
  static getDerivedStateFromProps(props , state)
  {
    console.log('[app.js] run in getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(props, state){
      console.log(props , state);
      console.log('[app.js] run in shouldComponentUpdate');
      return true;
  }

  getSnapshotBeforeUpdate(props, state){
    console.log(props, state);
    console.log('[app.js] run in getSnapshotBeforeUpdate');
    return null;
  }
 
  componentDidMount() {
    //console.log('[app.js] run in componentDidMount');


    //ino vase in hast ke betunam updating ro tozih bedam
    setTimeout(() => {
      this.setState((state, props)=> ({
              articles : [...state.articles, {id : 4 , title : 'article 4' , body : 'this is article 4 '}]
      }))
    }, 3000);
  }

  componentDidUpdate(props, state , snapshot){
    console.log('[app.js] run in componentDidUpdate');
  }

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

   deleteArticle(articleId){
     this.setState(prevState=>{
       return {
          articles : prevState.articles.filter(article => article.id !== articleId)
       }
     })
   }
    

    render(){

      console.log('[app.js] run in render');

       let articleList = this.state.articles.map((article , index) => <CardItem key={index} title={article.title} body={article.body} id={article.id} deleteArticle={this.deleteArticle.bind(this)}></CardItem>)  ;
       let btnclasses = ['btn-more']

       if(this.state.btnHover) {
         btnclasses.push('active')
       } 
       console.log(btnclasses)
       return(
            <div className = "app">



                <div className='container'>
                <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/1/29/laravel-projects-2.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/3/4/1583305013laravel-poster-1.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://roocket.ir/public/images/2020/4/28/node.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

                   <ErrorBoundary>
                      { articleList}    
                  </ErrorBoundary>   
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
          
              
  
           </div>
       )

    };
}


export default App;