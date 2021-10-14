const x=require('fs');

x.writeFileSync("hello.js",`const fx=(e)=>"hello"+e; const b={a:12,c:[1,2,3,"hi"],dd:"string"}; module.exports={fx,b} /*module.exports gx=fx;*/`);


x.writeFileSync("user.js",`const {fx,b}=require("./hello");

console.log(fx("universe"), JSON.stringify(b));

console.log(JSON.parse(JSON.stringify(b)).dd,"assume from api call api.json");`);
