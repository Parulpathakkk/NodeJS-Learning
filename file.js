const fs = require("fs")
// Sync way to create a file and add content
fs.writeFileSync("./text.txt", "hello")

// Async way to create a file and add content
fs.writeFile("./text.txt" , "Hello world async", (err)=>{})

// Sync way to add content in a file (deletes the preivous data)
const result = fs.readFileSync("./text2.txt", "utf-8")
console.log(result);

// Async way to add content in a file (deletes the preivous data)
fs.readFile("./text2.txt","utf-8", (err, result)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log(result);
    }
})

// Adding new elements without deleting the previous one
fs.appendFileSync("./text.txt" , "hello there\n")

// copy a file
fs.copyFileSync("./text.txt", "./copy.txt")

// delete a file
fs.unlinkSync("./copy.txt")

// status check
console.log(fs.statSync("./text.txt"));

// make folder

fs.mkdirSync("my-doc")