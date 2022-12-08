import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorFeild, setErrorFeild] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
    setErrorMsg(" ");
    setErrorFeild(" ");
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    setErrorMsg(" ");
    setErrorFeild(" ");
  };

  const submitHandler = () => {
    let emailRE =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let passwordRE = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
      var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

      if(!email){
    setErrorMsg("Please enter the email");
    setErrorFeild("email");
        }
        else if(!email.match(emailRE)){
            setErrorMsg("Please enter valid email");
            setErrorFeild("email");
        }
        else if (!password) {
            setErrorMsg("Please enter the password");
            setErrorFeild("password");
          } else if (!password.match(regularExpression)) {
            setErrorMsg("Minimum six characters, at least one letter, one number and one special character");
            setErrorFeild("password");
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
          style={{ border: errorFeild == "email" && "1px solid red" }}
        />
         {errorFeild == "email" && <span className="error-msg">{errorMsg}</span>}
        <br />
        <input
          className="emailId"
          type="text"
          placeholder="   Password"
          onChange={passwordHandler}
          style={{ border: errorFeild == "password" && "1px solid red" }}
        />
         {errorFeild == "password" && <span className="error-msg">{errorMsg}</span>}
        <br />
        <button className="button-login" onClick={submitHandler}>LOGIN</button>
      </div>
    </div>
  );
}
