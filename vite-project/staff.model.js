import mongoose from "mongoose";
const staff_schema=new mongoose.Schema({
    name:{type:String,
        required:[true,"Password is required"]},
    email:{type:String,
        required:[true,"Password is required"]},
    phone:{type:String,
        required:[true,"Password is required"]},
    address:{type:String,
        required:[true,"Password is required"]},
    empid:{type:String,
        required:[true,"Password is required"]},
    salary:{type:String,
        required:[true,"Password is required"]},
    designation:{type:String,
        required:[true,"Password is required"]},
    experience:{type:String,
        required:[true,"Password is required"]},
    
    username:{type:String,
        required:[true,"Username is required"]
        // unique:[true,"username already exist"]
        },
    password:{type:String,
            required:[true,"Password is required"]
        }, 
    confirmpassword:{type:String,
            required:[true,"Confirm Password is required"]
        },
    admin:{type:String
    },   
    photo:{type:String},        

})

export default mongoose.model.staff||mongoose.model("staff",staff_schema)