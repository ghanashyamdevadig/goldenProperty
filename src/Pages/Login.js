import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [passwordErrorMsg, setPasswordtErrorMsg] = useState("");


  const emailHandler = (event) => {
    setEmail(event.target.value);
    setEmailErrorMsg(" ");
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setPasswordtErrorMsg(" ");
    
  };

  const submitHandler = () => {
    let emailRE =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //   let passwordRE = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
      var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


if(!email && !password){
    setEmailErrorMsg("Please enter email")
    setPasswordtErrorMsg("Please enter password")
}
     else if(!email){
        setEmailErrorMsg("Please enter email")
        }
        else if(!email.match(emailRE)){
            setEmailErrorMsg("Please enter valid email");
            
        }
        else if (!password) {
            setPasswordtErrorMsg("Please enter the password");
        
          } else if (!password.match(regularExpression)) {
            setPasswordtErrorMsg("Minimum six characters, at least one letter, one number and one special character");

          }
          else{
            alert("Logged Successfully")
        navigate("/dash")
          }
  };

  return (
    <div className="main-div">
      <div className="login-logo">
        <img src={require("../Assests/Images/Frame 61760.png")} alt="" />
      </div>
      <div className="main-cntr">
        <h1 className="login">LOGIN</h1>
        <input
          className="emailId"
          type="text"
          placeholder="   Official email id"
          onChange={emailHandler}
          style={{ border: emailErrorMsg && "1px solid red" }}
        />
         { <span className="error-msg">{emailErrorMsg}</span>}
        <br />
        <input
          className="password"
          type="password"
          placeholder="   Password"
          onChange={passwordHandler}
          style={{ border: passwordErrorMsg && "1px solid red" }}
        />
        {<span className="error-msg">{passwordErrorMsg}</span>}
        <br />
        <button className="button-login" onClick={submitHandler}>LOGIN</button>
      </div>
    </div>
  );
}
