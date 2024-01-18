import React , { useState ,useEffect }from 'react'
import './editstaffdetails.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'






const Editstaffdetails = () => {


 
    let photo=""
    let navigate=useNavigate()
   const {id}=useParams()
    const[val,setVal]=useState({
      name:"",
      email:'',
      phone:'',
      address:'',
      empid:'',
      salary:'',
      designation:'',
      experience:'',
      username:"",
      password:"",
      confirmpassword:"",
      admin:"",
      photo:'',
    })
   
    console.log(id);
  
    const getData=async()=>{
      const res = await axios.post(`http://localhost:3004/authentication/getstaffdetails/${id}`);
  
      if(res.status==200)
      {
        setVal(res.data)
      }
    }
  
    useEffect(()=>{
      getData()
    },[])
    console.log('val',val);
  
  
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
    
    const getDatas=(e)=>{ 
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    
    const Upload=async(e)=>{
      e.preventDefault()
    
      photo=await convertToBase64(e.target.files[0])
      setVal((pre)=>({...pre,photo:photo}))
    }
    
    const editData=async(e)=>{
      e.preventDefault()
      console.log(val)
      
      const res=await axios.patch(`http://localhost:3004/authentication/editstaffdetails/${id}`,{...val})
      if(res.status!=200){
        console.log(res.status);
        alert("Data Not Edited")
      }else{
        alert('Data Edited')
        navigate(`/staffulldetails/${id}`)
      }
    }

   










  return (
    <div>
  
 








       <div className="container2">
	<div className="screen2">
		<div className="screen__content">
        <div className='head2'>Edit Staff Details</div>
			<form className="login3" >
                  
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Name </span></label></div>
                    <div><input className="login__input2" name='name' value={val.name}  onChange={getDatas} type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Employee ID</span></label></div>
                    <div><input className="login__input2"  name='empid' value={val.empid}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>User Name </span></label></div>
                    <div><input className="login__input2" name='username' value={val.username}   onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Password </span></label></div>
                    <div><input className="login__input2"  name='password' value={val.password}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Confirm Password </span></label></div>
                    <div><input className="login__input2"  name='confirmpassword' value={val.confirmpassword}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Phone</span></label></div>
                    <div><input className="login__input2"  name='phone' value={val.phone}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>E-mail </span></label></div>
                    <div><input className="login__input2"  name='email' value={val.email}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Address </span></label></div>
                    <div><input className="login__input2"  name='address' value={val.address}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Designation </span></label></div>
                    <div><input className="login__input2"  name='designation' value={val.designation}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Experience </span></label></div>
                    <div><input className="login__input2"  name='experience' value={val.experience}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Salary </span></label></div>
                    <div><input className="login__input2"  name='salary' value={val.salary}  onChange={getDatas}  type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Added By </span></label></div>
                    <div><input className="login__input2"  name='admin' value={val.admin}  onChange={getDatas}   type="text" /></div>
			</div>
            <div className="login__field2">
					<div ><label htmlFor="" className='span2' ><span>Photo </span></label></div>
                    <div className='image'><img src={val.photo} alt="" /></div>
                    <div><input className="login__input2"  name='photo'   onChange={Upload}  type="file" /></div>
			</div>

           <div><button onClick={editData}  >Submit</button></div> 
        
								
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

export default Editstaffdetails
