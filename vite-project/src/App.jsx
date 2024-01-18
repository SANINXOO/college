import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Adminlogin from './components/adminlogin/adminlogin'
import Adminregister from './components/adminregister/Adminregister'
import Adminhome from './components/adminhome/adminhome'
import Staffreg from './components/staffreg/Staffreg'
import Staffview from './components/staffview/Staffview'
import Staffulldetails from './components/staffulldetails/Staffulldetails'
import Stafflogin from './components/stafflogin/Stafflogin'
import Staffhome from './components/staffhome/Staffhome'
import Editstaffdetails from './components/editstaffdetails/Editstaffdetails'
import Forgetusername from './components/forgetusername/Forgetusername'
import Forgetpassword from './components/forgetpassword/Forgetpassword'
import Studentreg from './components/studentreg/studentreg'
import Studentview from './components/studentview/studentview'
import Studentfulldetails from './components/studentfulldetails/Studentfulldetails'
import Editstudent from './components/editstudent/Editstudent'
import Adminstudentview from './components/adminstudentview/Adminstudentview'
import Studentdetailsforadmin from './components/studentfulldetailsforadmin/Studentdetailsforadmin'
import Studentlogin from './components/studentlogin/Studentlogin'
import Home from './components/home/Home'
import Studenthome from './components/studenthome/Studenthome'







function App() {
 

  return (
    <>
     <BrowserRouter>

  
     
     <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/home' Component={Login}/>
     <Route path='/adminlogin' Component={Adminlogin}/>
     <Route path='/adminregister' Component={Adminregister}/>
     <Route path='/adminhome' Component={Adminhome} />
     <Route path='/staffreg' Component={Staffreg} />
     <Route path='/staffview' Component={Staffview} />
     <Route path='/staffulldetails/:id' Component={Staffulldetails} />
     <Route path='/editstaffdetails/:id' Component={Editstaffdetails}/>
     <Route path='/stafflogin' Component={Stafflogin}/>
     <Route path='/staffhome' Component={Staffhome}/>
     <Route path='/forgetusername' Component={Forgetusername}/>
     <Route path='/forgetpassword' Component={Forgetpassword}/>
     <Route path='/studentreg' Component={Studentreg}/>
     <Route path='/studentview' Component={Studentview}/>
     <Route path='/studentfulldetails/:id' Component={Studentfulldetails} />
     <Route path='/editstudent/:id' Component={Editstudent}/>
     <Route path='/adminstudentview' Component={Adminstudentview}/>
     <Route path='/studentfulldetailsforadmin/:id' Component={Studentdetailsforadmin} />
     <Route path='/studentlogin' Component={Studentlogin}/>
     <Route path='/studenthome' Component={Studenthome}/>
     


    
    

     
     

     </Routes>
     
     </BrowserRouter>

   

    </>
  )
}

export default App
