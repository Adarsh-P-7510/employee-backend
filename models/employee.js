const mongoose = require("mongoose")
const schema  = mongoose.Schema(
    {
        "name":String,
        "id" : String,
        "dpt": String,
        "salary":String
    }
)
let employeemodel=mongoose.model("employees",schema)
module.exports={employeemodel}