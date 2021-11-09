import axios from "axios";


const url='https://admin.srkprojects.com/web/api/client/v1/contact-us/'

export const apiposting=async(adddata)=>{
    return await axios.post(url,adddata);
    
}