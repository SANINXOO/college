import React, {useState} from 'react'
import './adminlogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adminlogin = () => {

	const success = () =>
 toast.success("Login succesful",{
	position: "top-right",
	autoClose:2500 ,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true, 
	draggable: true,
	progress: undefined, 
	theme: "dark",
 })




const navigate=useNavigate()
const [user,setUser]=useState("");
const [password,setPassword]=useState("");



const handleLogin = async (e) => {
  e.preventDefault()
  try {
	const response = await axios.post("http://localhost:3004/authentication/login", {

	user: user,
	password: password
	});
	const data = response.data;
	console.log(data);

	if (response.status !== 404) {
	const token = data.token;
	localStorage.setItem("token", JSON.stringify(token));
	localStorage.setItem("user", JSON.stringify(user));
	// navigate("/Adminhome", { state: { user } });
    success(setTimeout(()=>{
		navigate("/adminhome");
	},3000),{ state: { user } });
		
	} else {
    alert(data.msg);
	}
  } catch (error) {
	alert("User Name or Password Incorrect");
	
	
  }
};





  return (
    <div>
       <div className="container">
	<div className="screen">
		<div className="screen__content">
        <div className='head'>Admin Login</div>
			<form className="login2">
                
				<div className="login__field">
				
					<input type="text" className="login__input" onChange={(e) => setUser(e.target.value)} placeholder="User name"/>
				</div>
				<div className="login__field">
				
					<input type="password" className="login__input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				</div>

				<div><button onClick={handleLogin}>Login</button></div>
				<ToastContainer 
				
				position="top-right" 
				autoClose={2500}
				hideProgressBar={false} 
				newestOnTop={false} 
				closeOnClick 
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				
				/>
				
       
			
				
				<div className='back'><Link to={`/home`}><IoIosArrowRoundBack className='back3' /></Link></div>
				
       
      
								
			</form>
			<div className="social-login">
				<h4><Link className='sign-up' to={`/Adminregister`}>Sign Up</Link></h4>
				
			
				

				
				
			</div>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape111"></span>
		</div>		
	</div>
</div>

<div>
     
      </div>


    </div>
  )
}

export default Adminlogin
