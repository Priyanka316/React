// import { Link } from "react-router-dom";
import React from "react";

const Students = () =>{
    
    return(
        <div>
              {/* <p id="Title">
              <Link className="MainTitle" to ="/">Home</Link>              
              <Link className="MainTitle" to ="/students">Students</Link>  
              <Link className="MainTitle" to ="/contactus">Contact Us</Link>  
                
            </p> */}
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
                    <td>Priya</td>
                    <td >25</td>
                    <td>CSE</td>
                    <td>2021</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Gouri</td>
                    <td>25</td>
                    <td>BSE</td>
                    <td>2018</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Anita</td>
                    <td>22</td>
                    <td>BE</td>
                    <td>2022</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Param</td>
                    <td>18</td>
                    <td>BAMS</td>
                    <td>2022</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Pritham</td>
                    <td>23</td>
                    <td>BioTech</td>
                    <td>2024</td>
                    <td>edit</td>
                </tr>
               </thead>
              
             </table>
         
       
        </div>
    )
}
export default Students;