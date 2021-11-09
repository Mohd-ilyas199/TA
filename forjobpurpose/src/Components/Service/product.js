import axios from "axios"
export const getProduct =async ()=>{
    const resp = await axios.get('https://fakestoreapi.com/products');
   return resp.data;



}