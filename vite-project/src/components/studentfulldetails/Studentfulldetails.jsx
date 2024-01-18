import React, {useEffect,useState} from 'react'
import { MdAttachEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Link , useParams} from 'react-router-dom';
import './student.css'
import axios from 'axios';



const Studentfulldetails = () => {



    const { id } = useParams();
    const [getStudent, setStudent] = useState([]);
    const [attentantace, setAttentantace] = useState();

    const fullData = async () => {
        try {
            const res = await axios.post(`http://localhost:3004/authentication/getstudentfulldetails/${id}`);
            setStudent(res.data);
            console.log(res.data); // Ensure data is present
            getpersantage(); // Move this inside the 'then' block
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fullData(id);
    }, [id]);

    const getpersantage = () => {
     if (getStudent.attandance !== "" && getStudent.attandance !== undefined) {
         let pers = (getStudent.attandance / 200) * 100;
         setAttentantace(pers);
         console.log(pers);
     }
 };
 
 return (
<div>








      <div>
      <form action="" >
     <div className="view-main">
         <div className="registration-left">
           <div className="photo">
            <div className='imageview'>
              <img src={getStudent.photo} alt="" />
            </div>
            
           </div>
          
      <div className="sign-in-form-input">  
      
      <div className='name1'>{getStudent.name}</div>
      <div className='name2'>{getStudent.studentid}</div>

      <div className='email2'><MdAttachEmail /><span>{getStudent.email}</span></div>

      <div className='phone2'><MdOutlineLocalPhone /><span>{getStudent.phone}</span></div>
      <div className='button2'>
                        <button >
							<Link to={`/editstudent/${getStudent._id}`} className='link'>Edit</Link>
						</button>
                 </div>
    
      
      </div>

         </div>
         <div className="registration-right">
         <div className="sign-in-form-right-input2"> 

         <div className='right-data2'>
            <div><label >Address</label></div>
            <div>: {getStudent.address}</div>
         
         </div>
         <div className='right-data2'>
            <div><label >Date Of Birth</label></div>
            <div>: {getStudent.dob}</div>
         
         </div>
         <div className='right-data2'>
            <div><label >Course</label></div>
            <div>: {getStudent.course}</div>
         
         </div>
         <div className='right-data2'>
            <div><label >Batch</label></div>
            <div>: {getStudent.batch}</div>
         
         </div>
         <div className='right-data2'>
            <div><label >Semester</label></div>
            <div>: {getStudent.sem}</div>
         
         </div>
         <div className='right-data2'>
            <div><label >Attendance</label></div>
            <div>: {attentantace!==""?`${attentantace}%`:'Loading...'}</div>
         
         </div>


      <div><label >Test Marks</label></div>
      <div className='right-data2'>
        <div> <div><span>Chem </span></div>
        <div><span>Phy </span></div>
        <div><span>Math </span></div></div>
        <div>
            <div>: {getStudent?.test?.testChe}</div>
            <div>: {getStudent?.test?.testPhy}</div>
            <div>: {getStudent?.test?.testMath}</div>
        </div>
        
        </div>

      <div><label >Internal Mark</label></div>
      <div className='right-data2'>
        <div> <div><span>Chem  </span></div>
        <div><span>Phy </span></div>
        <div><span>Math </span></div></div>
        <div>
            <div>: {getStudent?.internal?.internalChe}</div>
            <div>: {getStudent?.internal?.internalPhy}</div>
            <div>: {getStudent?.internal?.internalMath}</div>
        </div>
        
        </div>

        <div className='right-data2'>
            <div><label >Added By</label></div>
            <div>:   {getStudent.staff}</div>
         
         </div>


     

      
    </div>   
         </div>

      


      </div>
     </form>
   </div>
    </div>
  )
}

export default Studentfulldetails
