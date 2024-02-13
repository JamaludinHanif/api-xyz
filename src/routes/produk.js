const express = require("express");
const router = express.Router();

const userController = require("../controller/produk");

// GET barang
router.get("/", userController.getAllProducts);

// create newUser
router.post("/", userController.createNewProduct);

// update user
router.patch("/", userController.updateProduct);

// delete
router.delete("/", userController.deleteProduct);

module.exports = router;
