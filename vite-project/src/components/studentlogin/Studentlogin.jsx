import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosArrowRoundBack } from "react-icons/io";

const Studentlogin = () => {

    const navigate=useNavigate()
    const [studentid,setstudentID]=useState("");
    const [dob,setDob]=useState("");
    
    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post("http://localhost:3004/authentication/studentlogin", {
    
        studentid: studentid,
        dob: dob
        });
    
        const data = response.data;
        console.log(data);
    
        if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("stud_token", JSON.stringify(token));
        success(setTimeout(()=>{
            navigate("/studenthome");
        },3000),{ state: { studentid } });
        } else {
        alert(data.msg);
        }
      } catch (error) {
        alert("Student ID Or Date Of Birth Incorrect");
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
  <div>
       <div className="container">
	<div className="screen5">
		<div className="screen__content">
        <div className='head'>Student Login</div>
			<form className="login2">
                
				<div className="login__field">
					
					<input type="text" className="login__input" onChange={(e) => setstudentID(e.target.value)} placeholder="Student Id"/>
				</div>
				<div className="">
				
					<input type="date" className="login__input" onChange={(e) => setDob(e.target.value)} placeholder="D - O - B" />
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

<div className='back'><Link to={`/`}><IoIosArrowRoundBack className='back3' /></Link></div>
								
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
    </div>
  )
}

export default Studentlogin
