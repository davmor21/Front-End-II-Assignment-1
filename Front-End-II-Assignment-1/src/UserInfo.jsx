import {Component } from 'react'

class UserInfo extends Component{
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
export default UserInfo