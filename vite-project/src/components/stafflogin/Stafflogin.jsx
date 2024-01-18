import React, {useState} from 'react'
import './stafflogin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stafflogin = () => {



const navigate=useNavigate()
const [username,setUser]=useState("");
const [password,setPassword]=useState("");

const handleLogin = async (e) => {
  e.preventDefault()
  try {
	const response = await axios.post("http://localhost:3004/authentication/stafflogin", {

	username: username,
	password: password
	});

	const data = response.data;
	console.log(data);

	if (response.status !== 404) {
	const token = data.token;
	localStorage.setItem("token", JSON.stringify(token));
	localStorage.setItem("username", JSON.stringify(username));
	success(setTimeout(()=>{
		navigate("/staffhome");
	},3000),{ state: { username } });
	} else {
    alert(data.msg);
	}
  } catch (error) {
	alert("Server not connected");
  }
};


const success = () =>
 toast.success("Login Succesful",{
	position: "top-right",
	autoClose:2500 ,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true, 
	draggable: true,
	progress: undefined, 
	theme: "dark",
 })





  return (
    <div>
       <div className="container">
	<div className="screen5">
		<div className="screen__content">
        <div className='head'>Staff Login</div>
			<form className="login2">
                
				<div className="login__field">
					
					<input type="text" className="login__input" onChange={(e) => setUser(e.target.value)} placeholder="User name"/>
				</div>
				<div className="">
					
					<input type="password" className="login__input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				</div>
				<div><Link to={`/forgetusername`} className='link2'>Forget Username</Link><span className='span3'> or </span><Link to={`/forgetpassword`} className='link2'>password</Link>
				
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
				<div className='back'><Link to={`/`}><IoIosArrowRoundBack className='back2' /></Link></div>
								
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape15"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Stafflogin







