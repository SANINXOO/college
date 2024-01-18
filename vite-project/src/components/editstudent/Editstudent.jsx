import React,  { useState ,useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import './editstudent.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Editstudent = () => {
     

    const {id}=useParams()
    let Photo="";
  const [val,setVal]=useState({
    staff:"",
    studentid:"",
    name:"",
    email:"",
    phone:"",
    address:"",
    dob:"",
    course:"",
    batch:"",
    sem:"",
    attandance:"",
    internal:{ 
      internalChe:"",
      internalPhy:"",
      internalMath:""
    },
   test:{
    testChe:"",
    testPhy:"",
    testMath:""
   },
    photo:""
  })
    const success = () =>
    toast.success("Change Succesfuly Applied",{
     position: "top-right",
     autoClose:2500 ,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true, 
     draggable: true,
     progress: undefined, 
     theme:"dark",
   })
    const navigate=useNavigate()
    const [username, setUsername] = useState("");

    const fullData = async () => {
        try {
            const res = await axios.post(`http://localhost:3004/authentication/getstudentfulldetails/${id}`);
            setVal(res.data);
            console.log(val);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fullData(id);
    }, [id]);

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);





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
    setVal((pre)=>({...pre,[e.target.name]:Photo}))
  }

  const Getdata=(e)=>{ 
    // console.log(e.target.value);
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }


  const GetTestmark = (e) => {
    setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
  };
  

  const GetInternalmark = (e) => {
    setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
  };

  const Edit=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.patch(`http://localhost:3004/authentication/editstudentdetails/${id}`,{...val,staff:username})
    console.log(res.data);
    if(res.status!==404){
      success();
      setTimeout(()=>{
        navigate(`/studentfulldetails/${id}`);
},3000);
     }
   } catch (error) {
    alert("error",error)
   }
   
    
  } 


  return (
    <div>
             <div className="container3">
	<div className="screen3">
		<div className="screen__content2">
        <div className='head3'>Edit Student Details</div>
			<form className="login2" >

           
            


             <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">Student ID</label></div>
					<div><input type="text" className="login__input8" value={val.studentid}  name='studentid' onChange={Getdata}      /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Full Name</label></div>
					<div><input type="text" className="login__input8"  value={val.name}  name='name'  onChange={Getdata}    /></div>
				</div>
               
               
            </div>
            <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">E-mail</label></div>
					<div><input type="text" className="login__input8"  name='email' value={val.email}   onChange={Getdata}   /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Phone</label></div>
					<div><input type="text" className="login__input8"  name='phone' value={val.phone}    onChange={Getdata}  /></div>
				</div>
               
               
            </div>

            <div className="login5sub">
            <div className="login__field6">
            <div><label htmlFor="" className="label2">Address</label></div>
                <div><textarea className='textarea2' name="address" value={val.address}  id="" onChange={Getdata}  ></textarea></div>
					
					
			</div>
            </div>
            <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">Date Of Birth</label></div>
					<div><input type="date" className="login__input8"  name='dob'  value={val.dob}   onChange={Getdata}   /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Course</label></div>
                <select className='login__input8' name="course" id="cars" value={val.course}   onChange={Getdata}   >
                    
                    <option value="volvo">Html</option>
                     <option value="saab">Css</option>
                     <option value="mercedes">Bootstrap</option>
                       <option value="audi">Java</option>
                    </select>
				</div>
               
               
            </div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Batch</label></div>
					<div><input type="text" className="login__input8"  name='batch' value={val.batch}  onChange={Getdata}   /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Sem</label></div>
					<div><input type="text" className="login__input8"  name='sem' value={val.sem}  onChange={Getdata}  /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Attendence</label></div>
					<div><input type="text" className="login__input8"  name='attandance' value={val.attandance}  onChange={Getdata}  /></div>
				</div>
            </div>
            <div className='head5'>Internal Marks</div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Chemistry</label></div>
					<div><input type="text" className="login__input8"  name='internalChe' value={val.internal.internalChe}   onChange={GetInternalmark}  /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Physics</label></div>
					<div><input type="text" className="login__input8"  name='internalPhy' value={val.internal.internalPhy} onChange={GetInternalmark}   /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Maths</label></div>
					<div><input type="text" className="login__input8"  name='internalMath' value={val.internal.internalMath} onChange={GetInternalmark}  /></div>
				</div>
            </div>
            <div className='head5'>Test Score</div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Chemistry</label></div>
					<div><input type="text" className="login__input8"  name='testChe' value={val.test.testChe} onChange={GetTestmark}  /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Physics</label></div>
					<div><input type="text" className="login__input8"  name='testPhy' value={val.test.testPhy} onChange={GetTestmark}  /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Maths</label></div>
					<div><input type="text" className="login__input8"  name='testMath' value={val.test.testMath} onChange={GetTestmark}  /></div>
				</div>
            </div>
            <div className="login5sub">
            <div className="login__field6">
            <div className="stdimg"><img src={val.photo} alt="" /></div>
                <div className=" stdimg2">    <input className='textarea' type="file" name="photo" id=""   onChange={Upload}   /></div>
					
					
			</div>
            </div>

            <div>
                <button className='stdbtn' onClick={Edit} >Apply Changes</button>
                <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
              />
               
            </div> 


				


				
								
			</form>
			
		</div>
			
	</div>
</div>
    </div>
  )
}

export default Editstudent
