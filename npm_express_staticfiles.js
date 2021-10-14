const x=require("express");
const y=require("fs"); const w=require("path");

y.mkdirSync("public"); y.writeFileSync("./public/index.html",`<html><head><style>blockquote{color:tomato;}</style></head><body><img src="https://th.bing.com/th/id/R.2a8409fa169841e06036d10908a3ac50?rik=KhLvz64OcBXWng&riu=http%3a%2f%2fpixelartmaker.com%2fart%2fe00c7795409a1ce.png&ehk=2l2UX47XTZ9lnEQnmb1pDyRqgFQsWUZkYOmrN7q%2bRxI%3d&risl=&pid=ImgRaw&r=0" /><img src="https://66.media.tumblr.com/620f47f5f7a9fe40d6af9dfcacca8dfe/tumblr_pgrrmojFTn1rjsbq2_540.png" /><img src="https://i.pinimg.com/originals/d5/f7/ef/d5f7efb5c1babc9bb53c093e25f0a2fb.jpg" /><img src="https://th.bing.com/th/id/R.776210fbe73a05f03d557038c4c29d53?rik=ZDYFdDlOQm056w&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f3dace70f59e3190.png&ehk=pZvtW0hGqtY6b%2bRLHjFzGfpmoKvaUjyfHDxAndPN5jU%3d&risl=&pid=ImgRaw&r=0" /><img src="https://i.pinimg.com/originals/4e/7e/b2/4e7eb25b1edd3a9d53ab35700359adf4.png" /></blockquote>Serving static files using expressjs. images, css, js. express.static built-in middleware function.  </blockquote></body></html>`);


const z=x();

z.use(x.static(w.join(__dirname,"public")));

z.listen(3000,()=>console.log("port 3000"));