import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props)  // why
        
    }

    render(){
       return( 
        <div className="userCard">
        <div>Name: {this.props.name}</div>
        <div>contact: {this.props.contact}</div>
        <div>phone: {this.props.phone}</div>
        </div>
       )
    }
}

export default UserClass;