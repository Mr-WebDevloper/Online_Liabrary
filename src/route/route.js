const express = require ('express');
const router = express.Router();

const bookcontroller = require('../controller/bookController')

const authorcontrller = require('../controller/authorController')

router.post("/creatbook",bookcontroller.creatBook);

router.get("/getbook",bookcontroller.getbook);

router.put("/updatebook",bookcontroller.updatebook);


router.get("/getbookbyname",bookcontroller.getbookbyname);

router.delete("/deleteBook",bookcontroller.deleteBook);

// authors APIs


router.post("/register",authorcontrller.registerAuthor);

router.get("/getauthors",authorcontrller.getauthors);

router.get("/findauthorbyid",authorcontrller.findauthorbyid);

router.put("/updateauthor",authorcontrller.updateauthor);

router.delete("/deleteauthor",authorcontrller.deleteauthor);


module.exports = router