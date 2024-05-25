import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            userData: {name:"Testing", location: "Testing Location"}
        }

        // console.log(this.props.name+"-Constructor")

    }

    async componentDidMount(){
        let userData = await fetch("https://api.github.com/users/niravparmar");
        let jsonData = await userData.json();
        this.setState({userData: jsonData});

        // Used to make API Call
        // console.log("JSON", jsonData.name, jsonData.location);

    }

    componentDidUpdate(prevProps, prevState){
        console.log("PrevState : ", prevState);
        console.log("This State : ", this.state);
        console.log("This Component is updated")
    }

    render(){
        const {name, location} = this.state.userData;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @niravparmar</h2>
            </div>
        )
    }
}

export default UserClass;