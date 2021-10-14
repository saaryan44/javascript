const x=require("path"); const y=require("os");
const wf=x.parse("C:/Users/aarya/Desktop/blender");

console.log(`path: ${JSON.stringify(x.parse("C:/Users/aarya/Desktop/blender"))} ${x.basename("C:/Users/aarya/Desktop/blender")}  ,  ${wf.name}, and wf is of type ${typeof wf}\t ${x.__dir}`);

console.log(`${y.freemem/1024/1024/1024} gb free, ${y.platform}  ${y.type} ${y.host} ss`);