import React, {useState} from 'react'
import './forget.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const Forgetusername = () => {

    const [phone, setPhone] = useState("");
    const [emp, setEmp] = useState(""); 
    const [usernameMessage, setUsernameMessage] = useState(""); 
  
    const handleChange = (e) => {
      setPhone(e.target.value);
    };
  
    const getUsername = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.get(`http://localhost:3004/authentication/getusername/${phone}`);
        setEmp(res.data.username);
        setUsernameMessage(`Username is: ${res.data.username}`);
      } catch (error) {
        setUsernameMessage("Username not found"); // Handle error if username is not found
      }
    };
  return (
    <div>
          <div className="container">
	<div className="screen">
		<div className="screen__content">
        <div className='head2'>Forget Username</div>
			<form className="login2">
                
				<div className="login__field">
					<input type="text" className="login__input3" onChange={handleChange}  placeholder="Enter  Your Phone Number"/>
				</div>

                <p>{usernameMessage}</p>
               
				
				
				
				

				<div><button onClick={getUsername} >Find User Name</button></div>
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

export default Forgetusername
