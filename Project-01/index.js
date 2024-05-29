const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

app.listen(PORT, () => console.log("server started here"));
