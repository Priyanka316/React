import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <p className="Title">
                <Link id="MainTitle" to ="/">Home</Link>
                <Link id="MainTitle" to ="/ContactUs">ContactUs</Link>
                <link id="MainTitle" to ="/Students">Students</link>
            </p>
            <p id="TitlePg">Home</p>
        </div>
    )
}

export default Home;