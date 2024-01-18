import React ,{useState,useEffect} from 'react'
import './studentreg.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Studentreg = () => {
    let navigate=useNavigate()
    const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

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
 toast.success("Succesfuly Registered",{
	position: "top-right",
	autoClose:2500 ,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true, 
	draggable: true,
	progress: undefined, 
	theme: "dark",
 })



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

  const GetInternalmark = (e) => {
    setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
  };

  const GetTestmark = (e) => {
    setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
  };


  const Getdata=(e)=>{ 
    // console.log(e.target.value);
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }

  const AddStudent=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.post("http://localhost:3004/authentication/addstudent",{...val,photo:Photo,staff:username})
    console.log(res.data);
    if(res.status!==404){
   
    success();
		setTimeout(()=>{
			navigate("/staffhome");
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
        <div className='head3'>Student Register</div>
			<form className="login1" >
            <div className='login3sub'>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input4"  name='studentid'  onChange={Getdata}    placeholder=" Student ID"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input4"  name='name'   onChange={Getdata}  placeholder=" Full Name"/>
				</div>
               
               
            </div>
            <div className='login3sub'>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input4"  name='email' onChange={Getdata}    placeholder=" E-mail"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input4"  name='phone'  onChange={Getdata}   placeholder=" Phone"/>
				</div>
            </div>
            <div className="login__field4">
                <textarea className='textarea' name="address" id="" placeholder='Address' onChange={Getdata} ></textarea>
					
					
			</div>
            <div className='login3sub'>
                <div className="login__field4">
					
					<input type="date" className="login__input4"  name='dob'  onChange={Getdata}   placeholder="Date Of Birth"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
                    <select className='login__input4' name="course" id="cars"    onChange={Getdata}    >
                    <option value="volvo">Html</option>
                     <option value="saab">Css</option>
                     <option value="mercedes">Bootstrap</option>
                       <option value="audi">Java</option>
                    </select>
				</div>
            </div>
            <div className='login3sub2'>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='batch'   onChange={Getdata}  placeholder=" Batch"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='sem'  onChange={Getdata}    placeholder=" Sem"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='attandance'  onChange={Getdata}   placeholder="Attendence"/>
				</div>
            </div>
          
           
			<div className='head5'>Internal Marks</div>
            <div className='login3sub2'>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='internalChe'  onChange={GetInternalmark}  placeholder=" Chemistry"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='internalPhy'   onChange={GetInternalmark}  placeholder=" Physics"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='internalMath'   onChange={GetInternalmark}  placeholder=" Maths"/>
				</div>
            </div>
            <div className='head5'>Test Score</div>
            <div className='login3sub2'>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='testChe'   onChange={GetTestmark} placeholder=" Chemistry"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='testPhy'   onChange={GetTestmark}  placeholder=" Physics"/>
				</div>
                <div className="login__field4">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input5"  name='testMath' onChange={GetTestmark}   placeholder=" Maths"/>
				</div>
            </div>
            <div className="login__field4">
                <input className='textarea' type="file" name="photo" id=""   onChange={Upload}   />
					
					
			</div>

            <div>
                <button onClick={AddStudent} className='stdbtn' >Register</button>
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
            </div>

				


				
								
			</form>
			
		</div>
			
	</div>
</div>
    </div>
  )
}

export default Studentreg
