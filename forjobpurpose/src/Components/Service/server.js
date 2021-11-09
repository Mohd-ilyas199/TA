import express,{Router} from "express"
import  mongoose  from "mongoose";
import route from "../Route/route.js";
const app=express()
const port=`8000`
const url='mongodb+srv://user:Miowner199@crud-mongodb.248ys.mongodb.net/PROJECT0?retryWrites=true&w=majority'


app.use("/users",route)

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log(`connected to server port  ${port}`)
    })
}).catch(error=>{
    console.log("error",error.message)
})

