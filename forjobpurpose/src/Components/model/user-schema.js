import mongoose,{mongo} from "mongoose"

const userschema =mongoose.Schema({
    name:String,
    username:string,
    age:Number,
    nickname:string,
    phone:Number

})


 const user= mongoose.model('user',userschema)

 export default user