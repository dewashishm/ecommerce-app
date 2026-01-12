import './Register.css'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='main-div'>
            <p className='register-header'>Create an account</p>
            <p className='register-subheader'>Create an account and start using....</p>

            <div className='second-div'>
                <p className='register-field-label'>Name</p>
                <input type="text" placeholder='Enter your Name' className='register-input-box'/>
                <p className='register-field-label'>Email Address</p>
                <input type="text" placeholder='Enter your Email' name="" id="" className='register-input-box'/>
                <p className='register-field-label'>Password</p>
                <input type="text" name=""  placeholder='********' className='register-input-box'/>

                <button className='btn-signup'>Sign Up</button>

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