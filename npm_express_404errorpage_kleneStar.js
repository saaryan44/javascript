const x=require("express"); const y=require("fs");
const z=x();
y.mkdirSync("temp"); 

z.set("view engine","hbs");

y.mkdirSync("temp/views"); y.mkdirSync("temp/static");

y.writeFileSync("temp/static/error.html",`<html><body><h1>404 error if the allowed paths are not entered in the address bar of the browser.</h1><a href="/"><span style="text-decoration:none;width:220px; height:130px;color:orange;background-color:pink;font-size:18px;align-items:center;justify-items:center",onclick="(()=>{this.style.color='white';this.style.border="4px solid brown"; this.style.backgroundColor="blue";})()">home</span></a></body</html>`);

y.writeFileSync("temp/views/index.hbs",`<html><body><h3>{{tx}}</h3><img src={{im}} /></body></html>`);z.use(x.static("temp"));


z.set("views","./temp/views"); z.use(x.static("./temp/static"));/*what is the use of this then? */

z.get("/",(a,b)=>b.render("index",{tx:"hello world",im:"https://th.bing.com/th/id/R.f0373fcdc9911a77f72f4c2b305e724c?rik=JO5Bo2oAdxR81Q&pid=ImgRaw&r=0"}));

z.get("*",(a,b)=>b.send(y.readFileSync("./temp/static/error.html","utf-8"))); 

z.listen(3000,()=>console.log("port 3000"));