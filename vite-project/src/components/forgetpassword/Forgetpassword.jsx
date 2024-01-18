import React, {useState} from 'react'
import './forgetp.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IoIosArrowRoundBack } from "react-icons/io";



const Forgetpassword = () => {

    const [val,setVal]=useState({phone:"",email:"",password:""})
    const handlechange=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
        console.log(val);
    }
 
    const editPwd=async(e)=>{
        e.preventDefault()
        const res=await axios.get(`http://localhost:3004/authentication/getusername/${val.phone}`)
        let data=res.data;
        if(data.email===val.email){
          const res=await axios.patch(`http://localhost:3004/authentication/forgotpwd/${val.phone}`,{
        password:val.password
      })
      if(res.status===200){
        alert("Password Changed")
      }
      console.log(res.status);
    }else{
      alert("Username and Password does not match")
    }
        }
  return (
    <div>
      <div className="container">
	<div className="screen4">
		<div className="screen__content">
        <div className='head2'>Forget Username</div>
			<form className="login2 " onSubmit={editPwd}>
                
				<div className="login__field">
				
					<input type="text" className="login__input7" name='phone'  onChange={handlechange}  placeholder="Enter  Your Phone Number"/>
				</div>
                <div className="login__field">
				
					<input type="text" className="login__input7" name='email'  onChange={handlechange}  placeholder="Enter  E-mail"/>
				</div>
                <div className="login__field">
				
					<input type="text" className="login__input7" name='password' onChange={handlechange}  placeholder="Enter New Password"/>
				</div>

               
               
				
				
				
				

				<div><button >Change Password</button></div>

                <div className='back'><Link to={`/stafflogin`}><IoIosArrowRoundBack className='back2' /></Link></div>
								
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape13"></span>
		</div>		
	</div>
</div>
    </div>
  )
}

export default Forgetpassword
