const x=require("fs"); const y=require("http"); 

x.writeFileSync("oye.html",`<html><body><h1>oye hoye</h1></body></html>`); x.writeFileSync("barnstone.html",`<html><body><img src="https://th.bing.com/th/id/R.2f5756add0ff5432938c6808c1e5a1ab?rik=lNQ2zmezlS26rw&pid=ImgRaw&r=0" /></body</html>`);


/*x.writeFileSync("form.html",`<html><body><a href="/hubble">see hubble</a><form get="./barnstone.html"><button stype="submit">sEE barnstone method image</button></form><form action="/oye"><button type="submit">say oye</button></form></body></html>`);
x.writeFileSync("hubble.html",`<html><body><img src="https://th.bing.com/th/id/OIP.vdbEYupShB-3fMQM1LdgowHaFK?pid=ImgDet&rs=1" /></body></html>`);               ...................... figure out form tag*/

x.writeFileSync("form.html",`<html><body><ol><li><a href="/hubble">see hubble</a></li><li><a href="/barnstone">see ellipse</a></li><li><a href="/oye">say oye</a></li><li>hello world</li></ol></body></html>`);

const z=y.createServer((a,b)=>{if(a.url==="/"){b.end(x.readFileSync("./form.html").toString());}else if(a.url==="/oye"){b.end(x.readFileSync("./oye.html").toString());}else if(a.url==="/hubble"){b.end(x.readFileSync("./hubble.html").toString());}else if(a.url==="/barnstone"){b.end(x.readFileSync("./barnstone.html").toString());}else{b.end(`<html><body><u><h1>page not found</h1><u></body></html>`);}});

z.listen(3000,"127.0.0.1",()=>console.log("port 3000 barnestone method"));