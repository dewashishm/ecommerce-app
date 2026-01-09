import './Login.css'


function Login() {
    return (
        <div className='login-page'>
            
            <div className='main-title'>
            <p className='title'>Login</p>
            <p className='title-h2'>Please fill your email and password to login</p>
            </div>
            
            
            
            <div className='username'>
            <p className='field-label'>Email Address</p>
            <input type="text" className='input-box' placeholder='Type your Email...'/>
            </div>
            
            
            <div className='password'> 
            <p className='field-label'>Password</p>
            <input type="text" className='input-box' placeholder='*********'/>
            </div>

            <div className=''>
                <button className='login-btn'>Log In</button>

            </div>
                <div>
                <p>Don't have an account?</p>
                <p>Register</p>
                </div>
    
        </div>
    )
}

export default Login;