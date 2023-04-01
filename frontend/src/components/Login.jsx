import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/loginAdmin", {
                email:email,
                password:password
            });
            history.push("/dashboard");
        }catch(error){
            if(error.response){
                setMsg(error.response.data.msg);
                console.log(error);
            }
        }
    }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className="box" onSubmit={Auth}>
                    <p className="has-text-center">{msg}</p>
                    <div className="field mt-5">
                        <label className="label">Email or Username</label>
                        <div className="controls">
                            <input type="text" className="input" value={email} placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Pasword</label>
                        <div className="controls">
                            <input type="password" className="input" value={password} placeholder="*****" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">Login</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
