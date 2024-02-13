const userModels = require("../models/users2");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModels.getAllUsers();
    res.json({
      message: "get data dari table tes_express",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// get user by id
const getUser = async (req, res) => {
  const id = req.query.id;
  try {
    const [data] = await userModels.getUser(id);
    res.json({
      message: `get data dari table tes_express berdasarkan id : ${id}`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// post data user
const createNewUsers = async (req, res) => {
  const body = req.body;
  try {
    await userModels.createNewUsers(body);
    res.json({
      message: `data berhasil ditambahkan tuan ${req.body.nama}`,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// update data user
const updateUser = async (req, res) => {
  const id = req.query.id;
  const body = req.body;
  try {
    await userModels.updateUser(body, id);
    res.json({
      message: `berhasil ubah data dari id : ${id}`,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// delete data user
const deleteUser = async (req, res) => {
  const id = req.query.id;
  try {
    await userModels.deleteUser(id);
    res.json({
      message: `Data berhasil dihapus berdasarkan id : ${id}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUsers,
  updateUser,
  deleteUser,
};
