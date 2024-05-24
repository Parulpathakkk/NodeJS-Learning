const fs = require("fs")

// fs.writeFileSync("./text.txt", "hello")

// fs.writeFile("./text.txt" , "Hello world async", (err)=>{})

// const result = fs.readFileSync("./text2.txt", "utf-8")
// console.log(result);

// fs.readFile("./text2.txt","utf-8", (err, result)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log(result);
//     }
// })

fs.appendFileSync("./text.txt" , "hello there\n")