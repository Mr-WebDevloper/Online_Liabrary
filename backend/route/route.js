const express = require ('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'temp/' })

const bookcontroller = require('../controller/bookController')

const authorcontrller = require('../controller/authorController')

const userController = require('../controller/userController')

router.post("/creatbook",upload.single('book_image'),bookcontroller.createBook);

router.get("/getbook",bookcontroller.getBook);

router.put("/updatebook",bookcontroller.updatebook);

router.delete("/deleteBook",bookcontroller.deleteBook);

// user APIs


router.post("/registeruser",userController.registeruser);

router.get("/getuser",userController.getuser);

router.post("/userlogin",userController.userLogin);

router.put("/updateuser",userController.updateuser);

router.delete("/deleteuser",userController.deleteuser);

// authors APIs


router.post("/registerAuthor",authorcontrller.registerAuthor);

router.get("/getauthors",authorcontrller.getauthors);

router.get("/findauthorbyid",authorcontrller.findauthorbyid);

router.put("/updateauthor",authorcontrller.updateauthor);

router.delete("/deleteauthor",authorcontrller.deleteauthor);


module.exports = router