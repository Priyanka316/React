import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassComponent from './component/ClassComponent';
import LinkPage from './component/LinkPage';

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


