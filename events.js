const x=require("events"); const z=require("http");
/*EventEmitter  new EventEmitter*/

const y=new x.EventEmitter();

y.on("sayhi",()=>{const h=z.createServer((a,b)=>{if(a.url==='/'){b.end(`<html><body bgcolor="pink"><h1>Hi there<img src="https://th.bing.com/th/id/OIP.1w9nwhvlDaZV7rN9E0txQQAAAA?pid=ImgDet&rs=1" /></h1></body></html>`);}else{b.end(`<html><body><img src="https://th.bing.com/th/id/R.419b00848fb77438f16bab3130b180d0?rik=351fgeLZ7TUPJg&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f88d2719ebf79fde.png&ehk=noBn16uCsYcuwTnmnKtYM9VfHVVuC%2bctCWHfoADStoA%3d&risl=&pid=ImgRaw&r=0" /><img src="https://th.bing.com/th/id/R.49a9d7640ef9d491385923ccc21d1475?rik=8qeNAWw2AEP%2fCA&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f1fc379a2e78e1ba.png&ehk=q%2bT7uvxDIjoYzK9EOwyPYaFrqLQFfViXeMkcL7aDjL0%3d&risl=&pid=ImgRaw&r=0" /></body></html>`);}}); console.log("ready to say hi, go to port 4000"); h.listen(4000,'127.0.0.1',()=>console.log("port 4000 running"));});
y.emit("sayhi");





y.on('casey',()=>{const h=z.createServer((a,b)=>{if(a.url==="/"){b.end(`<html><body><img src="https://th.bing.com/th/id/R.b35f62cc2f683dc81445a6dd82f5aa90?rik=GXlmHjGSjR0pQg&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fpolls%2f167000%2f167767_1231702890782_full.jpg&ehk=4Co8stPIeVl9lpeb4VsOcyCM%2bLjrzUgUdxFjLKa4hKU%3d&risl=&pid=ImgRaw&r=0" /><h1>Casey jones tic tac toe and jenga something game in cpp</h1></body></html>`);}else{b.end(`<html><body><img src="https://i.pinimg.com/236x/0e/83/2c/0e832c5220242208f9d53571ca6578da.jpg" /><img src="https://th.bing.com/th/id/R.ac539ae218b0d6d7b486c02c69f3734a?rik=tyZL77T3Y3nzsQ&riu=http%3a%2f%2fcdn.pastemagazine.com%2fwww%2fsystem%2fimages%2fphoto_albums%2ftmnt-fan-art%2flarge%2ftumblr-ljymeiroi91qgf3oqo1-1280.jpg%3f1384968217&ehk=nq1nOpN9m2X6EVYw9as%2fpx4y84EqFwLojjsmHor5bns%3d&risl=&pid=ImgRaw&r=0" /></body></html>`);}}); console.log("\n casey events are twon in number. this is the first one. go to port 3000 for this and the next one is created below..."); h.listen(3000,'127.0.0.1',()=>console.log("running on port 3000"));});

y.on('casey',()=>{const h=z.createServer((a,b)=>{if(a.url==="/"){b.end(`<html><body><img src="https://th.bing.com/th/id/R.d5d2abb7cc4023635d836a1a2b39140e?rik=cQs52XfM3VRXBg&pid=ImgRaw&r=0" /><h1>tournament fighters</h1></body></html>`);}else{b.end(`<html><body><img src="https://th.bing.com/th/id/R.fe19ee62185f1c9e8f41843180407da1?rik=ZRIOUjgTBsvKeQ&riu=http%3a%2f%2fpixelartmaker.com%2fart%2fc1688e8fc5178d7.png&ehk=u5KjV9qzJerI%2bw2BfYKIIHndJsUQtEHVGrtzt4OcWh8%3d&risl=&pid=ImgRaw&r=0" /><img src="https://th.bing.com/th/id/R.e788ddbaa6e9da50e8613bf72b65148b?rik=V0O9v8DcWO%2bvLQ&riu=http%3a%2f%2fpiq.codeus.net%2fstatic%2fmedia%2fuserpics%2fpiq_129168_400x400.png&ehk=oMdWH%2bA0QDkDrcegsIDCB3neghHTceqMli9Ek4Ovj9o%3d&risl=&pid=ImgRaw&r=0" /></body></html>`);}}); console.log("\n casey event by product 2\n...go to 8000 \t"); h.listen(8000,'127.0.0.1',()=>console.log("\trunning on port 8000"));});



y.on("casey",()=>console.log("\t\n\t\t\nports 3000 and 8000 with casey and port 4000 with sayhi"));

y.emit("casey");



y.on("param",(a,b)=>{if(a===200){console.log("something on 200___1");}else{console.log("something not on 200___1");}console.log(`hi ${b}`)})

y.emit("param",200," 'on 200'");

y.emit("param",320," 'on non-200' ");
