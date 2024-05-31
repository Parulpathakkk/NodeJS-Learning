const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// middleware - plugin
app.use(express.urlencoded({extended: false}));

// GET START
app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
      `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  const html = `
  <p>
  ${user.first_name} ${user.email}
  </p>
  `;
  res.send(html);
});
// GET END

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({status: "Pending"});
  })
  .delete((req, res) => {
    return res.json({status: "Pending"});
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({status: "success", id: users.length});
  });
});

app.listen(PORT, () => console.log("server started here"));
