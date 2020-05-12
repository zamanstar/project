import React, {Component} from 'react';
import './Card.css';
import {Card,Button} from 'react-bootstrap';

class CardItem extends Component{

   state = {};
    
  constructor(props){
    super(props);
    console.log('[card.js] run in constructor')
  }

  //in on tavabei hast ke goftam run mishe 
  static getDerivedStateFromProps(props , state)
  {
    console.log('[card.js] run in getDerivedStateFromProps');
    return null;
  }
  
  // in shart ro gozashtim le age data taghir nakarde bood bikhodi update nashe
  shouldComponentUpdate(props , state){
    if (props.title !== this.props.title || props.body !== this.props.body){
      return true;
    }
     return false;
  }

  componentDidMount() {
    console.log('[card.js] run in componentDidMount');
  }
  
    eventHandler(e){
        console.log('click')
    }

    eventHandlerSecound(e,ti){
        console.log('ti');
    }
    
    //akhare delete in ejra mishe
    componentWillUnmount(){
      console.log('[card.js] run in componentWillUnmount');
    }
    render(){
        
        console.log('[card.js] run in render');

        let{id, title, body, deleteArticle}  = this.props;
         //throw Error('Somthing wnt wrong2');
        return (
            <Card>
              <Card.Header as="h4">{title}</Card.Header>
              <Card.Body>
                <Card.Text>{body}</Card.Text>
                <Button onClick={this.eventHandler}>Click</Button>
              </Card.Body>
              <Card.Footer>
                <p>Card Footer</p>
                <Button onClick={() => deleteArticle(id)} className="btn-danger">Delete</Button>
              </Card.Footer>
            </Card>
            
                )
    }
}

export default CardItem;