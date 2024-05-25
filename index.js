const http = require("http");
const fs = require("fs");
const url = require("url");

// const myServer2 = http.createServer((req,res)=>{
//     console.log("hello");
//     res.end("started")
// })

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Homepage");

        break;
      case "/about":
        const username = myUrl.query.myname; // url search queries
        res.end(`Hi, ${username}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("this is a form");
        else if (req.method === "POST") res.end("success");
      default:
        res.end("404");
    }
  });
});

// myServer2.listen(8000, () => console.log("Sever started"));
myServer.listen(8000, () => console.log("Sever started"));
