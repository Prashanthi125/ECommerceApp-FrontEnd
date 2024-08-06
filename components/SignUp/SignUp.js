import React from "react";
import "./SignUp.css";
import Login from "../Login/Login";
function SignUp(){
 return (
    <div className="SignUpcard">
        <h2 style={{textAlign:"center"}}>SignUp Page</h2><hr></hr>
        <label>Enter Username</label>
            <input className="form-control" type="text"/>
            <label>Enter Password</label>
            <input className="form-control" type="password"/>
            <label>Confirm Password</label>
            <input className="form-control" type="password"/>
            <input type="checkbox"/>Show Password<br></br>
            <label>Enter email address</label>
            <input className="form-control" type="email"/>
            <br></br>
            <button style={{textAlign:"center",margin:"10px 150px"}} className="btn btn-primary">SignUp</button>
            
    </div>
 )
}
export default SignUp;