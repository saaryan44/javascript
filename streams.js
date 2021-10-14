const x=require("fs");
const y=require("http");
x.writeFileSync("./demo.txt","read me via stream object. hello world. imagine this to be a very large data file...");


const z=y.createServer();

z.on("request",(a,b)=>{const tp=x.createReadStream("./demo.txt"); tp.on("data",(f)=>b.write(`<html><body><h1><u>${f}</u><h1></body></html>`)); tp.on("end",()=>b.end());tp.on("error",(e)=>b.end(`<html><body><h3>${e}</h3><h1>Gone...the demo file is killed</h1></body></html>`));});

z.listen(3000,"127.0.0.1",()=>console.log("3000 port"));

setTimeout(()=>{ x.unlinkSync("./demo.txt");console.log("demo file killed");},60000);