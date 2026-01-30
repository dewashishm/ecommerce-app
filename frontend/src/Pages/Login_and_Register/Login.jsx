import './Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { loginUser } from '../../api/auth';



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailfield, setEmailfield] = useState("");
    const [passwordfield, setPasswordfield] = useState("");

    
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email){
            setEmailfield("Enter a valid email address");
            return;
        } else if (!password || password.length<6) {
            setPasswordfield("Enter a valid password");
            
            return;
        }
        
        const data = await loginUser(email, password);
        
        if(data.message) {
            navigate("/");
        }
    }


    return (
        <div className='login-page'>

            <div className='main-title'>
                <p className='login-header'>Login</p>
                <p className='login-subheader'>Please enter your email and password to login</p>
            </div>



            <div className='username'>
                <p className='login-field-label'>Email Address</p>
                <input type="text" 
                onChange={(e) => { setEmail(e.target.value); setEmailfield("")}}
                className='login-input-box' placeholder='Type your Email...' />
                {{emailfield} && <p style={{ color: "red" }}>{emailfield}</p>}
            </div>


            <div className='password'>
                <p className='login-field-label'>Password</p>
                <input type="text" 
                onChange={(e) => { setPassword(e.target.value); setPasswordfield("")}}
                className='login-input-box' placeholder='*********' />
                {{passwordfield} && <p style={{ color:  "red" }}>{passwordfield}</p>}
            </div>

            <div className='btn-div'>
                <button 
                className='login-btn' onClick={handleLogin} >Log In</button>

            </div>

            <div className='login-footer'>
                <p>Don't have an account?</p>
                <Link to='/login/register' className='register-btn'>
                <p>Register</p>
                </Link>
            </div>

        </div>
    )
}

export default Login;