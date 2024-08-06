import React from "react";
import "./Login.css";
function Login(){
  return (
    <div className="logincard">
        <h2 style={{textAlign:"center"}}>Login Page</h2><hr></hr>
        <label>Enter Username</label>
            <input className="form-control" type="text"/><br></br>
            <label>Enter Password</label>
            <input className="form-control" type="password"/>
            <input type="checkbox"/>Show Password<br></br>
            <button style={{textAlign:"center",margin:"10px 150px"}} className="btn btn-primary">Login</button>
    </div>
  )
}
export default Login;