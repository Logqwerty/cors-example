const express = require("express");

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

app.get("/api/menus", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.json(MENUS);
});

app.listen(9000, () => console.info("Server Started!"));
