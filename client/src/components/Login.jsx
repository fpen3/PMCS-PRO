import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';


function Login() {
 //-----------------------------BACK - END-----------------------------//
 const [userName, setUserName] = useState("");
 const [password, setPassword] = useState("");
 const [loginStatus, setLoginStatus] = useState("");

 const login = () => {
  Axios.post('http://localhost:3001/login', {
    userName   : userName,
    password   : password,
  }).then((response) => {

    if(response.data.message){
      setLoginStatus(response.data.message)
    } else{
      setLoginStatus(response.data[0].userName)
      window.location.href = "/ViewOnlyTable"
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
    <section className="loginsectionone">
      <div className="test" style={{height:'0px'}}><img src="background1.jpg" alt="" width="1500" height="1080"/></div>
        <div className="overlay"></div>
          <div className="loginpagescreen">
          <script src = "scripts.js"></script>
                    <h1 className="text-center mt-5"><u> Login</u></h1>
                    <br></br>
                    <label><b>Username:</b>&nbsp;   </label>
                    <input type="text" name="username" onChange={(e)=> {setUserName(e.target.value);}}/>
                    <br></br>
                    <label><b>Password:</b>&nbsp;   </label>
                    <input type={passwordShown ? "text" : "password"}  name="adminpassword" onChange={(e)=> {setPassword(e.target.value);}}/>
                    <br></br>   
                                     
                    
                    

                    <pre>
                      
                    </pre>

                    
                    <div className="btn-group">
                      <button onClick={login}>Login</button>
                      <button>Forgot Password?</button>
                      <button onClick={togglePassword}>Show Password </button>
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
export default Login;
