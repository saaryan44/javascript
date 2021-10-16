const x=require("fs");
const y=require("http");

x.mkdirSync("dd");x.writeFileSync("dd/hi.css",`body{background-color:blue;}`); const IMP=x.readFileSync("dd/hi.css","utf-8");
x.writeFileSync("dd/hi.html",`<html><head><style>body{color:orange;} ${IMP}</style><link rel="stylesheet" href="hi.css" /></head><body><h1>hi</h1></body></html>`);





const v=y.createServer((a,b)=>{if(a.url==="/"){b.end(x.readFileSync("dd/hi.html").toString());}else{b.end(`<html><body><h1>und</h1></body</html>`);}});

v.listen(3000,'127.0.0.1',()=>console.log("3000"));