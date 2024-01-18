import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login1">
				<div className='loginbutton '><Link to={`/Adminlogin`}><button>Admin Login</button></Link></div>			
				<div className='loginbutton '><Link to={`/Stafflogin`}><button>Staff Login</button></Link></div>
									
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
	
    </div>
  )
}

export default Login
