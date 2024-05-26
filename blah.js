// const http = require("http");
const express = require("express")

const app = express();

app.get("/", (req, res)=>{
    return res.end("hello from homepage")
})
app.get("/about", (req, res)=>{
    return res.end("hello from about page" + " hey " + req.query.myname)
})

app.listen(8000, () => console.log("Sever started"));

// OR

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Sever started"));