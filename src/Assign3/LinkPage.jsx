import { Link } from "react-router-dom"
import React from "react"

class LinkPage extends React.Component{
 

   render(){
    return(
       <div>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <p id="class0">
         {this.props.users.map(data =>{
         return(
               <p id='class1'>{`Name :${data.name} | Department : ${data.dept} | Rating :${data.rate}`}</p>
            )
         })
        }
        </p>
       <p>
         <Link to="/"><button>Go BACK</button></Link>
       </p>
       </div>
    )
   }
}
export default LinkPage;