const express = require("express");
const status = require("../controllers/statusController");
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const { tokenVerify } = require("../middlewares/tokenVerify");

const router = express.Router();

// status
router.get("/status", status);
// user
router.post("/register", userController.register);
router.post("/login", userController.login);

// product
router.get("/products", tokenVerify, productController.getProducts);
router.post("/products", tokenVerify, productController.createProduct);

module.exports = router;
