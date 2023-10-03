const express = require("express");
const {
  createContent,
  getSingleContent,
  getContent,
  createDescription,
  getHtmlDescriptionDetalis,
  createJeeMain,
  createJeeMainDes,
  getJeeMain,
  getJeeMainSingle,
  getJeeMainDes,
} = require("../controller/contentController");

const route = express.Router();

route.get("/get-html", getContent);
route.get("/get-html/:id", getSingleContent);
route.post("/create-content", createContent);
route.post("/create-description", createDescription);
route.get('/get-detail-html/:id',getHtmlDescriptionDetalis);
route.post('/jeemain',createJeeMain);
route.post('/jeemaindes',createJeeMainDes);
route.get('/get-jeemain',getJeeMain);
route.get('/get-jeemain/:id',getJeeMainSingle);
route.get('/get-detail-jeemain/:id',getJeeMainDes);

module.exports = route;
