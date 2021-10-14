const x=require("fs");
x.writeFile("use.js",`const x=require("fs");const obj=JSON.parse(x.readFileSync("./api.json").toString()); const y=require('http');`,d=>console.log("Will have to edit use.js manually to use string literals. Cannot use double string literals? Delete this and the by-product after use."));
x.writeFileSync("api.json",JSON.stringify([{a:'hello',b:[1,2,3],c:33},{a:"world",b:[3,4,5],c:441}]));

x.writeFileSync("check.js",`const x=require('fs');const v=JSON.parse(x.readFileSync("./api.json","utf-8"));console.log(v[0].b,v[1].a); `);