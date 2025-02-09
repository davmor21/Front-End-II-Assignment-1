import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState, useEffect} from 'react'

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
            <p style={{color: "dodgerblue"}}>
                Current Date and Time : {formattedDate} {formattedTime}
            </p>
        </>
    )
}

function Greeting() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hello, Welcome to React!</h1>
        <DigitalClock />
      </>
    )
  }

  export default Greeting