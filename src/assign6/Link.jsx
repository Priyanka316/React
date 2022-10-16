import { Link } from "react-router-dom";
import React from "react";
import '../App.css';

const Navbar = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="MainTitle" to ="/">Home</Link>
                <Link id="MainTitle" to ="/Students">Students</Link>
                <Link id="MainTitle" to ="/ContactUs">ContactUs</Link>
            </p>
        </div>
    )
}

export default Navbar;