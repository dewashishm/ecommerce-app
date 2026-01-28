import './Register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signupUser } from '../../api/auth';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(name,email,password);
        
        const data = await signupUser(name,email,password);
        console.log(data);
        
    }
    return (
        <div className='main-div'>
            <p className='register-header'>Create an account</p>
            <p className='register-subheader'>Create an account and start using....</p>

            <div className='second-div'>
                <p className='register-field-label'>Name</p>
                <input type="text" placeholder='Enter your Name' id='namex'  className='register-input-box' onChange={(e) => setName(e.target.value)}/>
                <p className='register-field-label'>Email Address</p>
                <input type="text" placeholder='Enter your Email' name="" id="emailx" className='register-input-box' onChange={(e) => setEmail(e.target.value)}/>
                <p className='register-field-label'>Password</p>
                <input type="text" name="" id='passwordx' placeholder='********' className='register-input-box' onChange={(e) => setPassword(e.target.value)}/>

                <button className='btn-signup' id='xx' onClick={handleSignup}>Sign Up</button>

<div className='register-footer'>

                <p>
                    <span>I have read and agree to the</span>{' '} 
                    <Link to='/login/register/terms-and-conditions' className='footer-label'>
                    <span>Terms & Conditions</span>
                    </Link>
                </p>

                <p>
                    <span>Have an account?</span>{' '}

                    <Link to='/login' className='footer-label'>
                    <span>Login</span>
                    </Link>

                </p>
</div>
            </div>
        </div>
    );
}

export default Register;