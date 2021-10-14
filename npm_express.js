/*npm init -y and npm i express */

const x=require("express"); 
const y=x(); 

y.get("/",(a,b)=>b.send(`<html><body><h1>hello express, hello npm</h1><img src="https://th.bing.com/th/id/R.43282466e5c408cc76439ea88f962d14?rik=sueetS4Kplap7A&pid=ImgRaw&r=0" /></body></html>`));

y.listen(4000,()=>console.log("port 4000"));