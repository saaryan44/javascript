const x=require("express")();
x.get("/",(a,b)=>b.send(`<html><body><h1>hello routing</h1><img src="https://th.bing.com/th/id/R.821e3ff5d27bd8eb0c99a580386d29b3?rik=RJmXvLrLj%2f%2bPKQ&pid=ImgRaw&r=0" /></body></html>`));
x.get("/r1",(a,b)=>b.send(`<html><body><img src="https://i.pinimg.com/originals/58/6e/51/586e51559dc40f48cd8ce65af9c1522f.gif" /></body></html>`));
x.get("/r2",(a,b)=>b.send(`<html><body><img src="https://data.whicdn.com/images/287722949/original.gif" /></body></html>`));

x.listen(3000,()=>console.log("port 3000")); 