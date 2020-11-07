var express = require("express");
var router = express.Router();
var indexController = require("../controller/index.controller");

router.get("/index/:id", indexController.deleteProductById);
router.get("/index", indexController.getAllProduct);



module.exports = router;
