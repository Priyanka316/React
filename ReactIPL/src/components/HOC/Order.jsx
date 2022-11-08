import React, { Component } from 'react'
import Higherorder from './Higherorder';

class Order extends Component {
  

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h5 onMouseOver={this.props.hochandleCount}>
            Order {this.props.hoccountnumber} 
            count:{this.props.hoccount}
        </h5>
      </div>
    )
  }
}
export default Higherorder(Order);
