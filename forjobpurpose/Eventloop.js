const Eventloop=()=>{
    setTimeout(()=>{
        console.log("2nd call")
    },3000)
    console.log("1st call")
}
Eventloop()