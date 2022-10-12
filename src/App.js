import React from 'react';
import Hoc from './Hoc';
import Parentcomponent from './Components/Parentcomponent';
import Purecompo from './Components/Purecompo';
import './App.css';

class App extends React.Component {
  render() {
  
    const { show, increment , decrement} = this.props  

    return (
    <div>
      <Parentcomponent ></Parentcomponent>    

      <h1>This is the example of HOC</h1>    

      <Purecompo></Purecompo>
      <h1 id='count'>{show}</h1>

    <button id='btn1' onClick={increment}>Increment </button> 
    <button id='btn2' onClick={decrement}>Decrement  </button> 
    
    
    </div>
    ) 
  }
}
  
  
export default Hoc(App);

