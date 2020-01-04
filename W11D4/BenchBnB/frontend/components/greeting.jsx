import React from 'react';
import {Link} from 'react-router-dom' 
// import {LogOut} from '../actions/session_actions'

class Greeting extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props.currentUser);
        if (this.props.currentUser){
            return(
                <div>
                    <h3>Welcome, {this.props.currentUser.username}</h3>
                    <button onClick={this.props.logOut}>LogOut</button>
                </div>
            );
        }
        else{
            return(
              <div>
                <Link to="/signup">Sign Up</Link>
                <Link to ="/login">Login</Link>
              </div>  
            );
        }
    }
}

export default Greeting;