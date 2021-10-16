
/* requests, express */
/* dynamic means sensitive to viewport size */

const a=require('express'); const b=a();
const c=process.env.PORT || 3000; const f=require("fs"); 

f.mkdirSync("public");f.writeFileSync("public/weather.css",`body{background-color:#6ff69a;color:brown; font-size:2em;} div{border:6px solid orange;background-color:rgba(133,123,111,0.5);color:white; float:right;align-items:center;justify-content:center;padding:6px;margin:14px;}`);

f.writeFileSync("public/weather.js",`const city=document.getElementById("city");const des=document.getElementById("des"); const fx=async (ee)=>{ee.preventDefault(); const yx=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById('inp').value+"&units=metric&appid=70cbebdb56042de92e507fb2cb664cd1"); const data=await yx.json(); city.innerHTML=data.name+ "city weather status :"+   data.weather[0].description;des.innerHTML=data.main.temp+"<sup>O</sup>C with maximum temprature of"+ data.main.temp_max+"<sup>O</sup>C.";};document.getElementById("submit").addEventListener('click',fx);`);

f.writeFileSync("public/weather.html",`<html><head><title>Weather</title><link href="https://th.bing.com/th/id/R.f96c2e503be9b2dd1c19216f17cfbc84?rik=4pZ5K8trANrUFg&riu=http%3a%2f%2fcdn130.picsart.com%2f291352615019211.png&ehk=1nXDUUIpJ%2b8obucD4gxMwvNxqwbUwhWKk%2bmQ%2bsIPBRU%3d&risl=&pid=ImgRaw&r=0" type="image/png" rel="icon" /><link rel="stylesheet" href="weather.css" /></head><body><h1>Weather of cities around the world</h1><div>this is a div</div><img src="https://th.bing.com/th/id/R.f96c2e503be9b2dd1c19216f17cfbc84?rik=4pZ5K8trANrUFg&riu=http%3a%2f%2fcdn130.picsart.com%2f291352615019211.png&ehk=1nXDUUIpJ%2b8obucD4gxMwvNxqwbUwhWKk%2bmQ%2bsIPBRU%3d&risl=&pid=ImgRaw&r=0" /><div style="width:244px; float:right;background-color:rgba(144,144,221,0.6);padding:4%;"><h4>Hello Weather</h4><form><input type="text" placeholder="City Name" autocomplete="off"  required  id="inp"/><input type="submit" value="get weather info"  id="submit"/> </form></div><div><p>${(new Date()).toLocaleDateString() }</p><p id="city"></p><p id="des"></p><section><img src="https://th.bing.com/th/id/R.ff0176290d1c7092aecb42168eed0348?rik=5qwTNM%2fauSqj0w&riu=http%3a%2f%2fhalcyonrealms.com%2fblogpics%2fjapgifH.gif&ehk=FQIyGJq0ZPyBCktNBaLkQOVR6qab9Oo0d6j%2bWc8md4s%3d&risl=&pid=ImgRaw&r=0" /></section></div><script src="weather.js"></script></body></html>`);

b.use(a.static("public"));

b.get("/",(d,e)=>e.send(`<html><body><h1>Index page</h1></body></html>`));

b.get("/link",(d,e)=>e.send(`<html><body><h1>Any other page</h1></body></html>`));

b.get("/weather",(d,e)=>e.send(f.readFileSync("public/weather.html").toString()));

b.get("*",(d,e)=>e.send(`<html><body><h1>Page not found</h1><h4>Only /link and index (/) pages exist.</h4></body></html>`));

b.listen(c,()=>console.log(`listening on port #${c}`));

