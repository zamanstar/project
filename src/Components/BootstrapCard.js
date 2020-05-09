import React, {Component} from 'react';
import './Card.css';
import {Card} from 'react-bootstrap';

class CardItem extends Component{
    eventHandler(e){
        console.log('click')
    }

    eventHandlerSecound(e,ti){
        console.log('ti');
    }
    render(){
        
        let{title,body}  = this.props;
         //throw Error('Somthing wnt wrong2');
        return (
            <Card>

                        <Card.Header as="h2">
                                  {title}
                        </Card.Header>
                        <section className="card-body">
                            <p>{title}</p>
                        </section>
                        <footer>
                             <p>{body}</p>
                            <button onClick={() => console.log(title)}>click</button>
                            <button onClick={(e) => this.eventHandler(e)}>click2</button>
                            <button onClick={this.eventHandler}>click3</button>
                            <button onClick={this.eventHandler.bind(this,'blablabla')}>click4</button>
                            <button onClick={(e) => this.eventHandlerSecound(e,'dddd')}>click5</button>
                        </footer>
            </Card>
            
                )
    }
}

export default CardItem;