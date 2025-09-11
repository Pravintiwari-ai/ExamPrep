const Admin = require("../models/Admin");
const express= require('express');
const router=express.Router();
router.get('/',async(req ,res)=>{
    return res.json("api called")
})

router.post('/', async(req,res)=>{
    const reg = await new Admin(req.body)
    return res.json("Admin Registered Successfully")
});
router.post('/login',async(req,res)=>{
    const{email, password}= req.body;
    const admin = await Admin.findOne({email:email});
    if(!admin){
        return res.status(400).json("Admin not found")
    }
    if(admin.password == password){
        return res.status(200).json({message:"Login Successfully",admin:{
            email:admin.email,
            id:admin._id,
            role:"admin"
        }})
    }else{
        return res.json({message:"Password not matched"})
    }
})
router.put('/change/:id',async(req,res)=>{
    const {id} = req.params;
    const {op,np,cnp}=req.body;
    console.log(req.body)
    const user= await Admin.findById(req.params.id);
    if(!user){
        return res.json({message:"Details not matched"})
    }
    if(user.password==op){
        console.log("first")
        if(op==np){
            return res.json({message:"New password and old password same"})
        }
        else if(np==cnp){
            try{
                const ex = await Admin.findByIdAndUpdate(id,{password:cnp});
                return res.json({message:"Password upadte suceessfully"})
            }
            catch(er){
                console.log(er);
                return res.json({message:"sorry try again"}) 
            }
        }
        else{
            return res.json({message:"your old password not matched"})
        }
    }
})

module.exports=router