/* npm init -y; npm i express hbs; */


const x=require("express"); const y=require("fs");  const m=x(); const z=require("hbs");

y.mkdirSync("hbs_templates");y.mkdirSync("hbs_templates/views");y.mkdirSync("hbs_templates/partials");


y.writeFileSync("./hbs_templates/partials/par1.hbs",`<img src="https://th.bing.com/th/id/R.21fe25797673c80e23c98ea76a92b033?rik=wgyobj4ktc9tTg&riu=http%3a%2f%2f68.media.tumblr.com%2ftumblr_l97x2hdRJw1qak1olo1_1280.jpg&ehk=Ena3uzbygI9hFIx23xz178%2bW%2fGwjN3SbELVhJyGnp5Y%3d&risl=&pid=ImgRaw&r=0" /><img src="https://th.bing.com/th/id/OIP.mfARyVAEs8VGW_5CvmhnGQHaGK?pid=ImgDet&rs=1" /><h1>Machine design and astronomy</h1>`);

 y.writeFileSync("./hbs_templates/views/index.hbs",`<html><body><div>{{>par1}}</div><img src={{ax}} style="float:right; border:4px dashed black;"/><h1>{{bx}}</h1>{{cx}}<section>{{>par1}}</section><h1>called par1 partial two times</h1></body></html>`);



m.set("view engine", "hbs"); m.set("views","hbs_templates/views"); z.registerPartials("./hbs_templates/partials");

m.get("/",(a,b)=>b.render("index",{ax:"https://th.bing.com/th/id/R.f0373fcdc9911a77f72f4c2b305e724c?rik=JO5Bo2oAdxR81Q&pid=ImgRaw&r=0",bx:"Som tom",cx:"<h1>hello world</h1>"}));

m.listen(3000,()=>console.log("port 3000"));