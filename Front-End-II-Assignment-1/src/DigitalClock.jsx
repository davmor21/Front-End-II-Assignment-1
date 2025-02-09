import { useState, useEffect } from 'react'
import './App.css'

function DigitalClock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);
    const formattedDate = time.toLocaleDateString();
    const formattedTime = time.toLocaleTimeString();
    return(
        <>
            <p style={{color: "offwhite;"}}>
                Current Date and Time : {formattedDate} {formattedTime}
            </p>
        </>
    )
    
}
export default DigitalClock;