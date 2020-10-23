
//This file is responsible the configuration of the databatse
// The uri is hard coded and I'll leave a TODO to update that to env vars

const mongoose = require("mongoose");

// TODO: Update uri to get address from database from env vars
const uri: string = "mongodb://admin:admin@db:27017/admin"

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true},(err: any) =>{
    if(err) {
        console.log(err)
    } else {
        console.log("Connected")
    }
    
})

export default mongoose