import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
//   useEffect(() => {
//     if (localStorage.getItem("user-info")) {
//       navigate("/");
//     }
//   });
  const Auth = async (e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:3001/loginAdmin', {
            email:email,
            password:password,
        });
        navigate("/dashboard")
    } catch(error){
        if(error.response){
            setMsg(error.response.data.msg)
        }
    }
  }

//   async function login()
//   {
//     console.warn(email,password)
//     let item={email,password};
//     let result= await fetch("http://localhost:3001/loginAdmin",{
        // method: 'POST',
        // headers:{
        //     "Content-Type": "application/json",
        //     "Accept":'application/json'
        // },
        // body:JSON.stringify(item)
//     })
//     result = await result.json();
//     localStorage.setItem("user-info",JSON.stringify(result))
//     navigate("/dashboard")
//   }
  return (
    <div className="auth-form-container">
      <h1>Login</h1>
      <div>
        <form onSubmit={Auth}>
            <p>{msg}</p>
        <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button /*onClick={login}*/>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
