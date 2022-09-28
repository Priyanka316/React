import React from 'react'

class ClassComponent extends React.Component {

    constructor(){
        super();
            this.state = {
                name:'',
                dept:'',
                rate:'',
                arr:[],
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
        const updateArray = this.state.arr
        updateArray.push({name:this.state.name, dept:this.state.dept, rate:this.state.rate})
        this.setState({showName:true, arr:updateArray})
    }
    render() {
        return(
            <center><div>
                <p>Name: <input type="text" value={this.state.name} onChange={this.updateName}/></p>
                <p>Department: <input type="text"  value={this.state.dept} onChange={this.updateDept}/></p>
                <p>Rating: <input type="number"  value={this.state.rate} onChange={this.updateRate}/></p>
                <button onClick={this.handleShowName}>SUBMIT</button>
                {this.state.showName && <p id="class0">{this.state.arr.map(data =>{                
                    return(
                        <p id="class1">{`Name: ${data.name} | Department : ${data.dept} Rating: ${data.rate}`}</p>
                    )
                })
            }
            </p>            
        }
        </div></center>
        )
    }
}
export default ClassComponent
        