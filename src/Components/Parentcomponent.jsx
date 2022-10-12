import React, { Component } from 'react'
import Purecompo from './Purecompo'

export class Parentcomponent extends Component { 
  constructor(props) {
  super(props)

  this.state = {
     Name:'Prith',     
  }
}
   changeState=()=>{
   this.setState({
     Name :"A Pure Component is a component that performs a check on the value of React props before deciding whether to re-render the component or not."
 })
}

  render() {
    console.log("Parent Component");
  
    return (
      <div>
        <>
            <Purecompo Name={this.changeState}> </Purecompo>
            <h1> Done by using Pure Components </h1><hr />  
        </>
      </div>
  
    )
  }
}

export default Parentcomponent;