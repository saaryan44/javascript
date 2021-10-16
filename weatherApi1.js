/* npm i requests */ const r=require("requests");
const s=require("http"); 


const tp=s.createServer((a,b)=>{if(a.url==="/"){r("http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=70cbebdb56042de92e507fb2cb664cd1").on("data",(dd)=>{console.log(dd); b.end(`<html><body><h1 style="border:5px solid orange;">${JSON.parse(dd).weather[0].description}</h1></body></html>`);}).on("end",(e)=>{console.log(e);});}else{b.end(`<html><body><img src="https://th.bing.com/th/id/R.f2e3d37f23cd9e28c54d736545406366?rik=7T7tjoBoz0XRCA&pid=ImgRaw&r=0" /><img src="https://th.bing.com/th/id/R.e95de498f7741414d4f41cd657bb5aa2?rik=Gk3dLnEYrfM9tg&pid=ImgRaw&r=0" /></body></html>`);} });


tp.listen(3000,"127.0.0.1",()=>console.log("port 3000"));