import React from 'react';




class ErrorBoundary extends React.Component{
    state = {
        hasError : false
    }

    //in ye metode dakheli ast ke dar haste ejra mishe va ina ro farakhni mikone va meghdar mide:
    static getDerivedStateFRomError(error){
        return { hasError : true }
    }

    componentDidCatch(error, errorInfo){
          // send errorInfo to Server for store
          this.setState({ hasError : true})
    }
    

    render(){
        if(this.state.hasError){
                return <h1>Somthing goes wrong</h1>
        }

        return this.props.children;
    }
}



export default ErrorBoundary;