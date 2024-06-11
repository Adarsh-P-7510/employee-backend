const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel} = require("./models/employee")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://adarshp:beenasadu@cluster0.6nnmmnj.mongodb.net/employeeapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/Add",(req,res)=>{
    let input=req.body
    let employee = new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({"status":"success"})
    

})
app.get("/ViewAll",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch((err)=>{res.send("employees details")})
    

})
app.listen(8083,()=>{
    console.log("srever started")
})