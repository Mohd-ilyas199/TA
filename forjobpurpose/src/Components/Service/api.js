import axios from "axios";

const url="http://localhost:3003/users";

export const GetUSers=async(id)=>{ //"http://localhost:3003/users/id";

    id=id || "";
    return await axios.get(`${url}/${id}`);
}

export const adduser=async(user)=>{
return await axios.post(url,user)
}

export const edituser=async(id,user)=>{
return await axios.put(`${url}/${id}`,user)
}

export const Deleteuser=async(id)=>{
return await axios.delete(`${url}/${id}`)
}