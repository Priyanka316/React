import React, { Component } from 'react'

 const Higherorder = Hoc => {
   class NewHoc extends Component{
    state={
        count:0
    };
   handleCount = () =>{
    this.setState({count:this.state.count+1})

   }
    render(){
        return<Hoc 
        hoccountnumber="CENTURY" 
        hoccount={this.state.count}  
        hochandleCount={this.handleCount}
        />
    }
   }
   return NewHoc;
}
export default Higherorder;