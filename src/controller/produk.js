const userModels = require("../models/produk");

const getAllProducts = async (req, res) => {
  try {
    const [data] = await userModels.getAllProducts();
    res.json({
      message: "get data dari tbl_barang berhasil",
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

const getProductByName = async (req, res) => {
  const namaBarang = req.query.name;
  try {
    const [data] = await userModels.getProductByName(namaBarang);
    if (data.length == 0) {
      res.json({
        message: "get data dari tbl_barang kosong",
        status: false,
        data: data,
      });
    } else {
      res.json({
        message: "get data dari tbl_barang berhasil",
        status: true,
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

const createNewProduct = async (req, res) => {
  const body = req.body;
  try {
    await userModels.createNewProduct(body);
    res.json({
      message: `succes menambahkan data`,
      status: true,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

const updateProduct = async (req, res) => {
  const body = req.body;
  const id = req.query.id;
  try {
    await userModels.updateProduct(body, id);
    res.json({
      message: `succes mengubah data, dari id : ${id}`,
      status: true,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.query.id;
  try {
    await userModels.deleteProduct(id);
    res.json({
      message: `berhasil delete data dari id : ${id}`,
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductByName,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
