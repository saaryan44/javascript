const x=require("fs"); const y=require("http");

/*var gp={}; did not work */

/*x.writeFileSync("dest.txt","fluffy...\n\n") ;  did not work*/


x.writeFileSync("demo.txt","delte it manually....focus on the lession...this is managed by a stream piping....");
const z=y.createServer();

z.on("request",(a,b)=>{
	/*console.log(JSON.stringify(b)); b is a circular structure */
	const tp=x.createReadStream("./demo.txt");
	tp.pipe(b)
	/*tp.pipe(gp);
	b.end(`<html><body><h1>${gp}</h1></body></html>`);*/
});

z.listen(3000,"127.0.0.1",()=>console.log("port 3000"));