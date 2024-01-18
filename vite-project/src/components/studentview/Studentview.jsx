import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import './stdview.css'



const Studentview = () => {
	


	const [username, setUsername] = useState("");
    const [count,setCount]=useState(0)
	const [getEmp,setEmp]=useState([])
	const getEmployee=async()=>{
    const res=await axios.get("http://localhost:3004/authentication/getstudent")
	setEmp(res.data)
	}

	useEffect(()=>{
		getEmployee()
	})
    
	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
 setUsername(JSON.parse(storedUsername));
		}
	}, []);
	



	const deleteStaff = async (id) => {
		const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
	
		if (isConfirmed) {
		try {
		const res = await axios.delete(`http://localhost:3004/authentication/delstudentdata/${id}`);
			console.log('Employee deleted:', res.data);
        } catch (error) {
			console.error('Error deleting employee:', error);
        }
		} else {
		console.log('Deletion cancelled.');
		}
		setCount(count+1)
 }
	
	useEffect(()=>{
		getEmployee()
 },[count])

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
                <div className='back'><Link to={`/staffhome`}><IoIosArrowRoundBack className='back4' /></Link></div>
            <div className='adminlogo'><MdAdminPanelSettings /></div>
            <div className='adminname'>{username}</div>
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



                 

		<div className="cards">
            
		{
				getEmp.map((data,index)=>
				
				
				<div key={index}  className="card-list">
				<Link  className='link3'to={`/studentfulldetails/${data._id}`} >
				<article className="card">
				<figure className="card-image">
					<img src={data.photo} />
				</figure>
				<div className="card-header">
					<div className="card-content">
					<div>{data.name}</div>
				<div>{data.studentid}</div>
					</div>

					<div className='border-between'></div>

					<div className='button'>
                        <button onClick={() => deleteStaff(data._id)}>
							<Link to={`#${data._id}`} className='link'>Delete</Link>
						</button>
                 </div>
				
			
				</div>
				
			</article>
				</Link>
			</div>
				
				)
			}
		




		</div>
     


   
      
    </div>
  )
}

export default Studentview
