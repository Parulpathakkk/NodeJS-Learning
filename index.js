const http = require("http");
const fs = require("fs");


// const myServer2 = http.createServer((req,res)=>{
//     console.log("hello");
//     res.end("started")
// })

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("about");
        break;
      default:
        res.end("404");
    }
  });
});

myServer2.listen(8000, () => console.log("Sever started"));
// myServer.listen(8000, () => console.log("Sever started"));
