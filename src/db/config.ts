const mongoose = require("mongoose");

const uri: string = "mongodb://admin:admin@db:27017/admin"

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true},(err: any) =>{
    if(err) {
        console.log(err)
    } else {
        console.log("Connected")
    }
    
})

export default mongoose