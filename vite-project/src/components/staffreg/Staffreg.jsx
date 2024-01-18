import React , { useState, useEffect }from 'react'
import './staffreg.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router-dom';







const Staffreg = () => {
     
	
	const [user, setUsername] = useState("");

	let navigate=useNavigate()
	let Photo="";
	const [val,setVal]=useState({
	admin:"",
	empid:"",
    name:"",
	username:"",
	password:"",
	confirmpassword:"",
	email:"",
	phone:"",
	designation:"",
	salary:"",
	experience:"",
	address:"",
	photo:""
	})



	useEffect(() => {
		const storedUsername = localStorage.getItem("user");
		if (storedUsername) {
 setUsername(JSON.parse(storedUsername));
		}
	}, []);
  
	const getData=(e)=>{ 
	setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
	console.log(val);
	}
  
	function convertToBase64(file) {
	return new Promise((resolve, reject) => {
 const fileReader = new FileReader();
	fileReader.readAsDataURL(file);
	
	fileReader.onload = () => {
		resolve(fileReader.result)
 }
	fileReader.onerror = (error) => {
		reject(error)
 }
	})
	}
  
	const Upload=async(e)=>{
 e.preventDefault()
	
	Photo=await convertToBase64(e.target.files[0])
 console.log(Photo);
	}
  
  
	const RegisterStaff=async(e)=>{
 e.preventDefault()
	// console.log(val);
	if (!val.username || !val.password) {
		alert("Please enter both username and password");
		return;
 }
	if (val.password!=val.confirmpassword){
		alert("Does not match the password")
	}
	try {
	const res=await axios.post("http://localhost:3004/authentication/addstaff",{...val,photo:Photo,admin:user})
	console.log(res.data);
	
 if(res.status!=201){
		alert("Data Not Added")
	}else{
		alert("Seccussfully Registred")
		navigate("/adminhome")
		
 }
	} catch (error) {
	alert("Data not added",error)
	}

	}
 return (
    <div>


<nav>
          <div className="navbar">
            <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>  
                <div className="logo">
            <div className='adminlogo'><MdAdminPanelSettings /></div>
            <div className='adminname'>{user}</div>
          </div>
              <div className="menu-items">
                <div>  <li><Link to={`/`} >Home</Link></li></div>
                <div> <li><a href="#">about</a></li></div>
                <div></div>
                <div></div>
                <div></div>
               
               
                <li><a href="#">blogs</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">contact</a></li>
              </div>
            </div>
          </div>
        </nav> 









       <div className="container2">
	<div className="screen2">
		<div className="screen__content">
        <div className='head2'>Register Staff</div>
			<form className="login3" >

               <div className="login__field">
					<input type="text" className="login__input"  name='name'   onChange={getData}  placeholder=" Name"/>
				</div>
                
				<div className="login__field">
					<input type="text" className="login__input"  name='username'  onChange={getData}  placeholder="User name"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  name='email'  onChange={getData}  placeholder="E-mail"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  name='phone'  onChange={getData}  placeholder="Phone Number"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  name='address'  onChange={getData}  placeholder="Address"/>
				</div>
				
				<div className="login__field">
						
						<input type="password" className="login__input"  onChange={getData} name='password'   placeholder="Password" />
					
				
					
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  onChange={getData}  name='confirmpassword'   placeholder="Confirm Password"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"   onChange={getData} name='empid'   placeholder="Employee ID"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  onChange={getData} name='designation'   placeholder="Designation"/>
				</div>
				
				<div className="login__field">
					<input type="text" className="login__input"  onChange={getData} name='experience'   placeholder="Experience"/>
				</div>
				<div className="login__field">
					<input type="text" className="login__input"  onChange={getData}  name='salary'   placeholder="Salary"/>
				</div>
				<div className="login__field">
				<div> <label htmlFor=""><span className='span'>Photo</span></label></div>
				<div><input type="file" className="login__input" onChange={Upload}   name='photo'   placeholder="Photo"/></div>
					
				</div>
			
				
				<div><button onClick={RegisterStaff}>Submit</button></div>
				
								
			</form>
			
		</div>
		<div className="screen__background">
				
			<span className="screen__background__shape screen__background__shape23"></span>
			
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape42"></span>
			<span className="screen__background__shape screen__background__shape32"></span>		
			<span className="screen__background__shape screen__background__shape22"></span>
			<span className="screen__background__shape screen__background__shape12"></span>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			
			
		</div>		
	</div>
</div>
    </div>
  )
}

export default Staffreg
