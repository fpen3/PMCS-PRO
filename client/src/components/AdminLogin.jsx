import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

function AdminLogin() {

//-----------------------------BACK - END-----------------------------//
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const[loginStatus, setLoginStatus] = useState("");
 
  const adminlogin = () => {
   Axios.post('http://localhost:3001/login', {
     userName   : userName,
     password   : password,
   }).then((response) => {
 
     if(response.data.message){
       setLoginStatus(response.data.message)
     } else{
       setLoginStatus(response.data[0].userName)
       window.location.href = "/Table"
     }
     console.log(response);
   });
 };
 //-----------------------------BACK - END-----------------------------//
 const [passwordShown, setPasswordShown] = useState(false);

 const togglePassword = () => {
  // When the handler is invoked
  // inverse the boolean state of passwordShown
  setPasswordShown(!passwordShown);
};
  return (
    
    <section className="adminloginsectionone">
      <div className="test" style={{height:'0px'}}><img src="background3.jpg" alt="" width="1500" height="1080"/></div>
        <div className="overlay"></div>
          <div className="adminloginpagescreen">
                    <h1 className="text-center mt-5"><u>Admin Login</u></h1>
                    <br></br>
                    <label><b>Username:</b>&nbsp;</label>
                    <input type="text" name="username"  onChange={(e)=> {setUserName(e.target.value);}}/>
                    <br></br>
                    <label><b>Password:</b>&nbsp;</label>
                    <input type={passwordShown ? "text" : "password"} name="adminpassword" onChange={(e)=> {setPassword(e.target.value);}}/>
                    <pre>
                      
                    </pre>

                    <div className="btn-group">
                      <button onClick={adminlogin}>Login</button>
                      <button>Forgot Password?</button>
                      <button onClick={togglePassword}> Show Password</button>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <text id="loginStatus">&nbsp;&nbsp;&nbsp;{loginStatus}</text>
                    

                    <br></br>
                    <br></br>
                    <br></br>
                    
                      <h1 className="font-weight-light"><u><b>Don't have an account?</b></u></h1>
                      <Link to="/AccountRequestForm">
                      <p>
                        Click this link to submit an approval request. 
                      </p>
                      </Link>
          </div>
  </section>
  );
}

export default AdminLogin;
