/*npm init -y; npm i express */
const x=require("express"); const y=x();

y.get("/",(a,b)=>{b.write(`<html><body><img src="https://data.whicdn.com/images/287722949/original.gif" />`);b.write(`<img src="https://th.bing.com/th/id/R.a837cf960d14f11afb4854896f773cf7?rik=CKlewX396mKKhw&pid=ImgRaw&r=0" /><img src="https://th.bing.com/th/id/OIP.d1yuuTmojo1tvGK5OKnBzgHaER?pid=ImgDet&rs=1" /><img src="https://th.bing.com/th/id/R.abb694a854bb03fae8a5d67390e8581b?rik=QolL2qOKRIO2RQ&pid=ImgRaw&r=0" /><h1>hello write and send</h1>`);b.write(`<img src="https://th.bing.com/th/id/OIP.je3tABoOmYUoaFEMauvF7QHaEK?pid=ImgDet&rs=1" /><img src="https://th.bing.com/th/id/R.898de5710e11f2da8111a943d3f9985c?rik=TCVRIce1iQ8smg&pid=ImgRaw&r=0" /><hr /><br /><h1>${{a:"String",n:33}}</h1></body></html>`);b.send();});

y.get('/json',(a,b)=>b.send({a:"sTRING",b:44,c:[3,45,5,true,{c:true,y:[55,4,3,"hi"]}]}));

y.get('/json/array',(a,b)=>b.send([{dp:[1,2,3,4],fi:5},{m:"string",n:"json"},{c:98,d:["hello",{d:"world",df:44}],y:true},{a:"hellow",b:22}]));

y.listen(3000,()=>console.log("port 3000"));