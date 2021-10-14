const x=require("fs");
const y=require("http");

x.writeFile("index.html",`<html><body><img src="https://th.bing.com/th/id/OIP.he0cGJbCE6tQbLDPfhheggHaE8?pid=ImgDet&rs=1" /><h1>hello world</h1>`,t=>console.log("index.html written parallely"));

x.appendFile("index.html",`<img src="https://th.bing.com/th/id/OIP.he0cGJbCE6tQbLDPfhheggHaE8?pid=ImgDet&rs=1" /> <p>I am appending the file</p></body></html>`,e=>console.log("appended index.html parallely"),aa=>console.log(aa));

const z=y.createServer((a,b)=>a.url==="/"?x.readFile("index.html","utf-8",(m,n)=>b.end(n.toString())):b.end("<html><body><h1>Hello Universe</h1></body></html>"));

x.mkdirSync("new");x.writeFileSync("./new/text.html",`<html><body><h1>buckingam palace</h1><img src="https://th.bing.com/th/id/OIP.he0cGJbCE6tQbLDPfhheggHaE8?pid=ImgDet&rs=1" /></body></html>`);
console.log(x.readFileSync("./new/text.html","utf-8"));
x.unlinkSync("./new/text.html");
x.rmdirSync("new");

z.listen(4000,"127.0.0.1",()=>console.log("port 40000"));


