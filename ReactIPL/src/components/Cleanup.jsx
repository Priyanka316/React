import React ,{ useState,useEffect } from 'react'

const Cleanup = () => {

    const [widthCount,setWidthCount] = useState(window.screen.width);

    const actualWidth = () =>{
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }

    useEffect(() =>{
        console.log("Add Event");
       window.addEventListener("resize", actualWidth);

       return () =>{
        console.log("Remove Event");
       window.removeEventListener("resize", actualWidth);
           
       }
    })
    
   

  return (
    <div style={{textAlign:"center"}}>
        <p>The actual size of the window is:</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default Cleanup