import React ,{useState}from 'react'
import './adminregister.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adminregister = () => {


const success = () =>
 toast.success("Succesfuly Registered",{
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
const[val,setVal]=useState({
		name:"",
		user:'',
		password:'',
		
});

const getData=(e)=>{
	setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
}


const Registerdata=async(e)=>{
    e.preventDefault();
    console.log({...val});
    
    const res=await axios.post("http://localhost:3004/authentication/adduser",{...val});
      
    if(res.status!=201){
      alert("Data Not Added")
    }
    else{
		success();
		setTimeout(()=>{
			navigate("/adminlogin");
		},3000);
    }
}





  return (
    <div>
       <div className="container">
	<div className="screenn">
		<div className="screen__content">
        <div className='head'>Register Admin</div>
			<form className="login3" >

               <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name='name' onChange={getData}  placeholder=" Name"/>
				</div>
                
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name='user' onChange={getData}  placeholder="User name"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password' onChange={getData}   placeholder="Password" />
				</div>
				<div><button onClick={Registerdata} >Sign Up</button></div>
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
								
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape10"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Adminregister
