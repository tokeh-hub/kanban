const jsonServer = require("json-server");
const express = require("express"); // Import Express.js
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Add cache headers for static assets
server.use(express.static("public", { maxAge: "1y" }));

server.use(router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

