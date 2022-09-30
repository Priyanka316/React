import React from 'react'
import { Link } from 'react-router-dom';

class ClassComponent extends React.Component {

    constructor(){
        super();
            this.state = {
                name:'',
                dept:'',
                rate:'',
                showName:false
        }
    }
    updateName = (event) =>{
        this.setState({name:event.target.value})
    }
    
    updateDept = (event) =>{
        this.setState({dept:event.target.value})
    }

    updateRate = (event) =>{
        this.setState({rate:event.target.value})
    }

    handleShowName = () =>{
        const updateArray = this.props.users
        updateArray.push({name:this.state.name, dept:this.state.dept, rate:this.state.rate})
        this.props.updateUsers(updateArray)
        this.setState({showName:true})
    }
    render() {
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <p>Name: <input type="text" value={this.state.name} onChange={this.updateName}/></p>
                <p>Department: <input type="text"  value={this.state.dept} onChange={this.updateDept}/></p>
                <p>Rating: <input type="number"  value={this.state.rate} onChange={this.updateRate}/></p>
                <Link to="/LinkPage"><button onClick={this.handleShowName}>SUBMIT</button></Link>
                {this.state.showName && <p id="class0">{this.state.arr.map(data =>{                
                    return(
                        <p id="class1">{`Name: ${data.name} | Department : ${data.dept} Rating: ${data.rate}`}</p>
                    )
                })
            }
            </p>            
        }
            </div>
        )
    }
}
export default ClassComponent
        
