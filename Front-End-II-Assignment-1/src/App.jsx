import { useState, useEffect, Component } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
            <p style={{color: "dodgerblue"}}>
                Current Date and Time : {formattedDate} {formattedTime}
            </p>
        </>
    )
    
}

class UserDetails extends Component{
    constructor(){
        super();
        this.state = {
            name: "Davon",
            job: "Systems Administrator",
            luckyNumber: Math.floor(Math.random() * 10)
        };
    }
    render(){
        return(
            <div>
                <p>Hello {this.state.name}, I see you work as a {this.state.job}!</p>
                <p>Your lucky number is <b style={{color: "gold"}}>{this.state.luckyNumber}</b></p>
            </div>
        );
    }
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
      
    </>
  )
}

function App(){
  return (
    <>
      <Greeting />
      <DigitalClock />
      <UserDetails />
    </>
  )
}



export default App