import React, {useEffect,useState} from 'react'
import './staffulldetails.css'
import { useParams } from 'react-router-dom';
import { MdAttachEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';




const Staffulldetails = () => {


const {id}=useParams()
console.log(id);
const [getEmp,setEmp]=useState([])
const fullView = async (id) => {
  try {
    const res = await axios.post(`http://localhost:3004/authentication/getstaffdetails/${id}`);
    console.log(res);
    setEmp(res.data);
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
};
useEffect(() => {
  fullView(id); // Call fullView when the component mounts
}, [id]);
console.log(getEmp);
 
 return (
    <div >

     
  


     





   <div>
      <form action="" >
     <div className="view-main">
         <div className="registration-left">
           <div className="photo">
            <div className='imageview'>
              <img src={getEmp.photo} alt="" />
            </div>
            
           </div>
          
      <div className="sign-in-form-input">  
      
      <div className='name'>{getEmp.name}</div>

      <div className='email2'><MdAttachEmail /><span>{getEmp.email}</span></div>

      <div className='phone2'><MdOutlineLocalPhone /><span>{getEmp.phone}</span></div>
      <div className='button2'>
                        <button >
							<Link to={`/editstaffdetails/${getEmp._id}`} className='link'>Edit</Link>
						</button>
                 </div>
    
      
      </div>

         </div>
         <div className="registration-right">
         <div className="sign-in-form-right-input"> 
         <div><label >Address</label></div>
          <div className='right-data'><span>{getEmp.address}</span></div>

          <div><label >Emp-ID</label></div>
          <div className='right-data'><span>{getEmp.empid}</span></div>

      <div><label >Designation</label></div>
      <div className='right-data'><span>{getEmp.designation}</span></div>

      <div><label >Salary</label></div>
      <div className='right-data'><span>{getEmp.salary}</span></div>

      <div><label >Experience</label></div>
      <div className='right-data'><span>{getEmp.experience}</span></div>

      <div><label >Added By</label></div>
      <div className='right-data'><span>{getEmp.admin}</span></div>


     

      
    </div>   
         </div>

      


      </div>
     </form>
   </div>
      
    </div>
  )
}

export default Staffulldetails

