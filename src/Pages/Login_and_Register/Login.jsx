import './Login.css'
import { Link } from 'react-router-dom'



function Login() {
    return (
        <div className='login-page'>

            <div className='main-title'>
                <p className='login-header'>Login</p>
                <p className='login-subheader'>Please enter your email and password to login</p>
            </div>



            <div className='username'>
                <p className='login-field-label'>Email Address</p>
                <input type="text" className='login-input-box' placeholder='Type your Email...' />
            </div>


            <div className='password'>
                <p className='login-field-label'>Password</p>
                <input type="text" className='login-input-box' placeholder='*********' />
            </div>

            <div className='btn-div'>
                <button className='login-btn'>Log In</button>

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