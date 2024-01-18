import bcrypt from 'bcrypt';
import pkg from "jsonwebtoken";
import schema from './user.model.js'
import staff_schema from './staff.model.js'
import student_schema from './student.model.js'
 

const {sign}=pkg;


export function addUser(req,res)
{
    
   try {
    console.log(req.body);
    const {name,user,password}=req.body;
    console.log(name,user,password);
    if(!(name&&user&&password))
    return res.status(404).send("fields are empty")

    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
        schema.create({name,user,password:hashedPwd});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(201).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}

export async function login(req, res) {
    try {
     console.log(req.body);
     const { user, password } = req.body;
     const usr = await schema.findOne({ user })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ user }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }


export async function home(req,res)
{

    try{
        console.log(req.user);
        const user=req.user.user
        console.log(user);
        res.status(200).send({msg:` ${user}`})

    }catch (error) {
        res.status(404).send(error)
    }


}




/////  staff    ///





export async function addStaff(req,res){
    try {
        console.log("hai",req.body);
        const {admin,empid,name,username,password,phone,confirmpassword,email,designation,salary,experience,address,photo}=req.body;
        console.log(admin,empid,name,username,password,phone,confirmpassword,email,designation,salary,experience,address,photo);
        if(!(admin&&empid&&name&&username&&password&&phone&&confirmpassword&&email&&designation&&salary&&experience&&address&&photo))
        return res.status(404).send("fields are empty")
        if(password!=confirmpassword)
        return res.status(404).send("password and confirm password are not same")
       
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            staff_schema.create({admin,empid,name,username,password:hashedPwd,phone,confirmpassword,email,designation,salary,experience,address,photo});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
}


export async function getStaff(req,res){
    let task=await staff_schema.find()
    res.status(200).send(task)
}


export async function getStaffulldata(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await staff_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export function delStaffData(req,res)
{
    const{id}=req.params;
    const data= staff_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function editStaffdetails(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await staff_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

export async function staffLogin(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await staff_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }

   export async function forgotUsername(req,res){
    const phone=req.params;
    console.log(phone);
    let task=await staff_schema.findOne(phone)
    console.log(task);
    res.status(200).send(task)
}

export async function staffFrgtPwd(req, res) {
    const phone = req.params.phone;
    const updatedPassword = req.body.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
    let task = await staff_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
    
    res.status(200).send(task);
}




///////student////////////



export async function addStudent(req, res) {
    try {
        console.log("hai", req.body);
        const { ...studentDetails } = req.body;

        await student_schema.create({ ...studentDetails }); 

        res.status(201).send("Successfully registered");
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || "Internal Server Error");
    }
}

export async function getStudent(req,res){
    let task=await student_schema.find()
    res.status(200).send(task)
}

export function delStudentData(req,res)
{
    const{id}=req.params;
    const data= student_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function getStudentfulldata(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await student_schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}

export async function EditStudentDetails(req, res) {
    const { id } = req.params;
    try {
        const updatedData = req.body;
        const value = await student_schema.updateOne({ _id: id }, { $set: updatedData });
        res.status(200).send(value);
    } catch (error) {
        res.status(404).send(error);
    }
}

// export async function studentLogin(req, res) {
//     try {
//      console.log(req.body);
//      const { studentid, dob } = req.body;
//      const usr = await student_schema.findOne({studentid })
//      console.log(usr);
//      if (usr === null) return res.status(404).send("Data Does'nt Exist");
     
//      if (dob !== usr.dob) return res.status(404).send("Incorrect Date Of Birth ");
//      const token = sign({ studentid }, process.env.JWT_KEY, { expiresIn: "24h" })
//      console.log(token);
//      res.status(200).send({ msg: "successfullly login", token })
//      res.end();
     
//     } catch (error) {
//      console.log(error);
     
//     }
//    }

export async function StudentLogin(req, res) {
    try {
    
      const { studentid, dob } = req.body;
      const user = await student_schema.findOne({ studentid });
       console.log(user._id);
        if (!user) {
        return res.status(404).send("User not found");
      }
        if (dob !== user.dob) {
        return res.status(401).send("Incorrect date of birth");
      }
      const{_id}=user
        const token = sign({ _id }, process.env.JWT_KEY, { expiresIn: "30m" });
        
        res.status(200).send({ msg: "Successfully logged in", token });
        } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
}
}

    

export async function GetDtsilsLoginedStudent(req,res){

    let task=await student_schema.findOne({_id:req.user._id})
    console.log(task);
    res.status(200).send({task})
}

