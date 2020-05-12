// import React, {Component} from 'react';

//in baes mishe man naram be soorate dasti update shodane component ro check konam  
import React, {PureComponent} from 'react';

import './Card.css'
import {Alert,Button} from 'react-bootstrap'

class AlertComponent extends PureComponent{
    
     state = {  }

    //  setShow(status){
    //      this.setState({
    //          show : status
    //      })
    //  }

    componentDidMount(){
      console.log('[Alert.js] run in componentDidMount');
    }
  
    componentDidUpdate(){
      console.log('[Alert.js] run in componentDidUpdate');
      
    }
  
    static getDerivedStateFromProps(props , state)
    {
      console.log('[Alert.js] run in getDerivedStateFromProps');
      return null;
    }
  
    shouldComponentUpdate(props , state){
      console.log('[Alert.js] run in shouldComponentUpdate');
      if(props.show !== this.props.show)
      return true;

      return false;
   }
  
  
      render(){
          
        console.log('[Alert.js] run in render');

       let { show, setShow } = this.props;
       console.log(setShow);
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
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Close me ya'll!
                </Button>
              </div>
            </Alert>
      
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
          </>
                )
    }
}

export default AlertComponent;