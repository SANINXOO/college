import React, { useEffect, useState } from 'react';
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const Staffhome = () => {

  let navigate=useNavigate()
  const [username, setUsername] = useState("");

 

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);




  const del=()=>{ 
    localStorage.clear();
    // location.reload()
    navigate("/stafflogin")

    }

  

 



  return (
    <div>

    

   <div className='layer'>



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
            <div className='adminname'>{username}</div>
            <div className='logout'><button onClick={del}>log out</button></div>
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

     



   <div className='body'>
     <div>
     <button className="continue-application">
    <div>
        <div className="pencil"></div>
        <div className="folder">
            <div className="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div className="paper"></div>
        </div>
    </div>
    <Link className='admin-home-link' to={`/studentreg`} >Student Registration</Link>
  
   
</button>


     </div>

     <div>
     <button className="continue-application">
    <div>
        
        <div className="folder">
            <div className="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div className="paper"></div>
        </div>
    </div>
    <Link className='admin-home-link'  to={`/studentview`}>  View Student Details</Link>
  
    
</button>



     </div>

   </div>
   </div>
  
   
  




      
       
    </div>
  )
}

export default Staffhome
