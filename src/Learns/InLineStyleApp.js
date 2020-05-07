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

    toggleMouse = (e) => {
      this.setState(prevState =>{
        return {
          btnHover : ! prevState.btnHover
        }
      })
    }

    // toggleMouse = (e) => {
    //   this.setState(prevState =>{
    //     return {
    //       BtnStyle : {
    //         ...prevState.BtnStyle,
    //         backgroundColor : 'rgba(0,0,0,.5)'
    //       }
    //     }
    //   })
    // }

    render(){
       console.log(this.state);
       let articleList = this.state.articles.map((article , index) => <Card key={index} title={article.title} body={article.body}></Card>)

       const BtnStyle = {
         backgroundColor : '#555'    //ino chon inja nemishe manfi gozasht harf aval ro bozorg mizarim
  
       }
      if(this.state.btnHover){
        BtnStyle.backgroundColor = 'rgba(0,0,0,.2)';
      }
       return(
            <div className = "app">
                
                { articleList}

                {this.state.loading
                    ?  <div>Loading...</div>
                    : null
                    }
           
           {/* Estefade az eventhandler ha */}

            {/* <button 
               style={BtnStyle} 
               onClick = {this.loadMore} 
               onMouseEnter={(e) => console.log('Mouse Enter')}
               onMouseLeave={(e) => console.loge('Mouse leave')}
               >load more</button> */}

              {/* <button 
               style={BtnStyle} 
               onClick = {this.loadMore} 
               onMouseEnter={this.mouseEnter}
               onMouseLeave={this.mouseLeave}
               >load more</button> */}

              <button 
              style={BtnStyle} 
               onClick = {this.loadMore} 
               onMouseEnter={this.toggleMouse}
               onMouseLeave={this.toggleMouse}
               >load more</button>

            {/* <button style={{backgroundColor : '#555', padding : '10px 25px', color : 'none'}} onClick = {this.loadMore}>load more</button> */}
           </div>
       )

    };
}


export default App;