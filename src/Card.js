import React, {Component} from 'react';

class Card extends Component{
    eventHandler(e){
        console.log('click')
    }

    eventHandlerSecound(e,ti){
        console.log(ti)
    }
    render(){
        
        let{title,body}  = this.props;
        return (
                    <div className = 'card'>
                        <header className = "card-header">
                        <h2>Card Title</h2>
                        </header>
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
                    </div>
                )
    }
}

export default Card;