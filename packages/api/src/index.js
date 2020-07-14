const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const MENUS = [
  {
    name: "김치찌개",
    price: 7000,
  },
  {
    name: "차돌된장찌개",
    price: 7000,
  },
  {
    name: "제육볶음",
    price: 8000,
  },
  {
    name: "돼지불백",
    price: 8000,
  },
];

app.use(cookieParser());

app.get("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.cookie("sessionID", "test", { maxAge: 60000, path: "/api" });
  res.send();
});

const authenticate = (req, res, next) => {
  const { sessionID } = req.cookies;
  console.log(sessionID);
  if (!sessionID || sessionID !== "test") {
    return res.status(403).send();
  }
  next();
};

app.options("/api/menus", (req, res) => {
  console.log("OPTIONS /api/menus");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "false");
  res.header("Access-Control-Max-Age", "-1");
  res.send();
});

app.get("/api/menus", (req, res) => {
  console.log("GET /api/menus");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.json(MENUS);
});

app.listen(9000, () => console.info("Server Started!"));
