import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassComponent from './Assign3/ClassComponent';
import LinkPage from './Assign3/LinkPage';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      arr:[],
    }
} 
  updateUsers=(updatedUsers)=>{
    this.setState({arr:updatedUsers})
  }
  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<ClassComponent users = {this.state.arr} updateUsers = {this.updateUsers}/>}/>
      <Route path='/LinkPage' element = {<LinkPage users = {this.state.arr}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
}

export default App;


