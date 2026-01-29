import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signupUser } from '../../api/auth';



function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namefield, setNamefield] = useState("");
    const [emailfield, setEmailfield] = useState("");
    const [passwordfield, setPasswordfield] = useState("");

    
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        
        if (!name) {
            setNamefield("Enter a name");
            return;  
        } 
        else if (!email) {
            setEmailfield('Enter a valid email address');
            return;
        }
        else if (password.length < 6){
            setPasswordfield('Enter a valid password');
            return;
        }

        const data = await signupUser(name,email,password);
        
        if (data.message){
            navigate("/login");
        }  
    };

    return (
        <div className='main-div'>
            <p className='register-header'>Create an account</p>
            <p className='register-subheader'>Create an account and start using....</p>

            <div className='second-div'>
                <p className='register-field-label'>Name</p>
                <input type="text" placeholder='Enter your Name'  className='register-input-box' onChange={(e) => { setName(e.target.value); setNamefield('')}}/>
                {namefield && <p style={{ color: "red" }}>{namefield}</p>}


                <p className='register-field-label'>Email Address</p>

                <input type="text" placeholder='Enter your Email' name="" className='register-input-box' onChange={(e) => { setEmail(e.target.value); setEmailfield('')}}/>
                {emailfield && <p style={{ color: "red" }}>{emailfield}</p>}


                <p className='register-field-label'>Password</p>
                <input type="password" name="" placeholder='********' className='register-input-box' onChange={(e) => { setPassword(e.target.value); setPasswordfield('')}}/>
                {passwordfield && <p style={{ color:  "red" }}>{passwordfield}</p>}


                <button className='btn-signup' onClick={handleSignup}>Sign Up</button>

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