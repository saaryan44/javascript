const p=require("express"); const q=p();
const y=require('requests');

q.get("/",(a,b)=>b.send(`<html><body><hr /><h1><u>images ho to world exploration ki</u>..romanji</h1><img src="https://th.bing.com/th/id/OIP.vmmZle8axvDBR4gTG6ldSgHaE7?pid=ImgDet&rs=1"><h1>using express syntax</h1><h3>Go to /hi and attach a name query.</h3></body></html>`));


q.get("/hi",(a,b)=>{y(`http://api.openweathermap.org/data/2.5/weather?q=${a.query.name}&appid=70cbebdb56042de92e507fb2cb664cd1`).on("data",(d)=>{const cg=JSON.parse(d);b.write(`<html><body><h1>hello weather api</h1><q><u>${d}</u></q><hr /><br /><section><h2>This is ${cg.name} city. The weather description is <em>${cg.weather[0].description}.</em></h2></section><img src="https://th.bing.com/th/id/R.af02e58f4e339166238c86c4d1f4392f?rik=UAd3F3RodRi41A&riu=http%3a%2f%2fwww.treesranch.com%2fdimension%2f1152x864%2fupload%2f2016%2f11%2f26%2farchitectural-engineering-architectural-house-blueprint-lrg-ba33676779c7628d.jpg&ehk=AoYZpK4N%2fFixTug2QA%2btAyjVFK62cVJGl3Maz76v9Oc%3d&risl=&pid=ImgRaw&r=0" /></body></html>`);}).on("end",(e)=>b.send()); });

q.listen(4000,()=>console.log("port 4000"));
