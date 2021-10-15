/* npm init -y; npm i express hbs ;*/

const x=require("express"); const y=require("fs"); y.mkdirSync("hbs_templates");y.writeFileSync("hbs_templates/index.hbs",`<html><body><h1>{{tx}}</h1><img src={{mc}} /></body></html>`);
const z=require("path");

const m=x(); m.set("view engine","hbs");
m.set("views",z.join(__dirname,"hbs_templates"));


m.get("/",(a,b)=>b.render("index",{tx:"Strenght of Materials and Heat & Mass Transfer",mc:"https://th.bing.com/th/id/R.f0373fcdc9911a77f72f4c2b305e724c?rik=JO5Bo2oAdxR81Q&pid=ImgRaw&r=0"}));
m.get("/r1",(a,b)=>b.render("index",{tx:"Fluid mechanics",mc:"https://th.bing.com/th/id/R.ca6e79caca0081960e79ed11216e727a?rik=T%2be7swyHpcuCgA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-xrHJ527ay28%2fUfUxLpBH_II%2fAAAAAAAAtLk%2fiWIrnjKwxvU%2fs1600%2f44%2bTransverse%2bSection%2bOf%2bAirplane%2bAerofoil%2bWing%2band%2bEngine%2bRoyal%2bMalaysian%2bAirforce%2bMuseum-109.jpg&ehk=87rvI%2fIQiR5K3bWOeEWiJN3ELaEivCO0AJAZMd3ywV4%3d&risl=&pid=ImgRaw&r=0"}))



m.listen(3000,()=>console.log("port 3000"));