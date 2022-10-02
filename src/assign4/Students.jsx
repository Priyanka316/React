import { Link } from "react-router-dom";
import React from "react";

const Students = () =>{
    
    return(
        <div>
              <p id="Title">
              <Link className="MainTitle" to ="/">Home</Link>
              <Link className="MainTitle" to ="/contactus">Contact Us</Link>  
              <Link className="MainTitle" to ="/students">Students</Link>  
                
            </p>
             <h1 id="studpage">Students Details</h1>
             <button id="btn">Add new student</button>
             <table border = '1'>
               <thead>
               <tr>
                    <th className="table1">Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
                <tr>
                    <td>Sushmitha</td>
                    <td >25</td>
                    <td>BSC</td>
                    <td>2017</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Disha</td>
                    <td>25</td>
                    <td>BE</td>
                    <td>2018</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Ankitha</td>
                    <td>25</td>
                    <td>BE</td>
                    <td>2020</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Shamiksha</td>
                    <td>18</td>
                    <td>BAMS</td>
                    <td>2022</td>
                    <td>edit</td>
                </tr>
               </thead>
              
             </table>
         
       
        </div>
    )
}
export default Students;