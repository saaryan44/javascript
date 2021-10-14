const x=require("fs");
const y=require("http");
x.writeFileSync("./demo.txt","read me via stream object");


const z=y.createServer();

z.on("request",(a,b)=>{try{const tp=x.readFileSync("./demo.txt"); if(a.url==="/"){b.end(`<html><body><h1><u>go to any other page to see demo...</u></h1></body></html>`);}else{b.end(`<html><body><h1><em>${tp.toString()}</em></h1></body></html>`);}}catch(e){if(a.url==="/"){b.end(`<html><body><h1><u>demo has been deleted...</u></h1></body></html>`);}else{b.end(`<html><body><h1><u>demo is dead</u></h1></body></html>`);}}});

/*(m,n)=>{if(m){return console.error(m);} b.end(`<html><body><h1>${n.toString()}</h1></body></html>`);}*/

z.listen(3000,"127.0.0.1",()=>console.log("port 3000"));

setTimeout(()=>{console.log(" 1 minute elapsed...demo file is being deleted..."); x.unlinkSync("./demo.txt")},60000);