import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


export default function LoginPage(){
    const [checked, setChecked] = React.useState(true);
    const updateChecked = () => setChecked(!checked);

    return (
      <div id="loginDiv">
        <form className="Form" id="form">            
            <h1>Log in to your account</h1>
            <label>
                <input 
                    className="textInput" 
                    id="user" 
                    type="text" 
                    placeholder='Username'
                />
            </label>
            <br />
            <label htmlFor='password' >
                <input 
                    className="textInput" 
                    id="password" 
                    type="password" 
                    placeholder='Password'
                />
            </label>
            <br />
            <label id="remember">
                <input 
                    id="rememberMe"
                    type="checkbox"
                    checked={checked}
                    onChange={updateChecked}
                  />Remember me
            </label>            
            <br />
            <br />
            <Link to='/items' id='logIn'>Log in</Link>
        </form>
        </div>
    );

}
