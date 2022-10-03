import { Link } from "react-router-dom";

const ContactUs = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="MainTitle" to ="/">Home</Link>
                <Link id="MainTitle" to ="/ContactUs">ContactUs</Link>
                <Link id="MainTitle" to ="/Students">Students</Link>
            </p>
            <p id="TitlePg">Contact Us</p>
        </div>
    )
}

export default ContactUs;