import React, {Component} from 'react';
import './Card.css'
import {Alert,Button} from 'react-bootstrap'

class AlertComponent extends Component{
    
     state = {
         show : true
     }

     setShow(status){
         this.setState({
             show : status
         })
     }

    render(){
       let { show } = this.state;
        return ( 
            <>
            <Alert show={show} variant="success">
              <Alert.Heading>How's it going?!</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => this.setShow(false)} variant="outline-success">
                  Close me ya'll!
                </Button>
              </div>
            </Alert>
      
            {!show && <Button onClick={() => this.setShow(true)}>Show Alert</Button>}
          </>
                )
    }
}

export default AlertComponent;