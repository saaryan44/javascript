/*npm init -y; npm i express; npm i hbs; */

const x=require("express"); const z=x(); 
const y=require("fs");

y.mkdirSync('views'); y.writeFileSync("./views/index.hbs",`<html><body><img src={{fifi}} /><q>{{mx}}</q><h1>{{wiki}}</h1></body></html>`);

z.set("view engine","hbs");

z.get("/",(a,b)=>b.render("index",{fifi:"https://th.bing.com/th/id/R.575217b8dc6edd3cf1ed4bf072ff96e8?rik=KQS0ybOcQE9bgw&riu=http%3a%2f%2fi.imgur.com%2fGhX4Aqe.gif&ehk=bDilHABstFNwUm%2f4K3nNTCpV9ReQf%2b8uSINvG2TRmGg%3d&risl=&pid=ImgRaw&r=0",wiki:"Computing server",mx:"A piece of computer hardware or software that provides functionallity for other programs or devices. The functionalities are called services. Share data with clients, performing computation for client. A single server can serve multiple clients and a single client can use multiple servers. A client process may run on the same device or may connect over a network to a server on a differnt device. "}));

z.get("/abc",(a,b)=>b.render("index",{fifi:"https://th.bing.com/th/id/OIP.AVOwxx4NmtPfudxd0OGS8AHaFi?pid=ImgDet&rs=1",wiki:"Neuro-Linguistic programming",mx:"Communication, personal development.  Neurological processes, language and programs. Programs are behaviours learned theough experience. "}));

z.listen(3000,()=>console.log("port 3000"));