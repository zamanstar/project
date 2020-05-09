import React, {Component} from './node_modules/react';
import './Card.css'

class AlertComponent extends Component{
    
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
                        </footer>
                    </div>
                )
    }
}

export default AlertComponent;