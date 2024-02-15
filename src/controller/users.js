const userModels = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModels.getAllUsers();
    res.json({
      message: "get data dari tbl_user berhasil",
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

const getUserByName = async (req, res) => {
  const userName = req.query.name;
  try {
    const [data] = await userModels.getUserByName(userName);
    if (data.length == 0) {
      res.json({
        message: `data tidak ditemukan berdasarkan id ${userName}`,
        status: false,
        data: data,
      });
    } else {
      res.json({
        message: `get data dari tbl_user berdasarkan : ${userName} berhasil`,
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

const createNewUser = async (req, res) => {
  const body = req.body;
  try {
    await userModels.createNewUsers(body);
    res.json({
      message: `succes menambahkan data`,
      status: true,
      data: body.tipe_user,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      status: false,
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const body = req.body;
  const id = req.query.id;
  try {
    await userModels.updateUser(body, id);
    res.json({
      message: `succes mengubah data`,
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

const deleteUser = async (req, res) => {
  const id = req.query.id;
  try {
    await userModels.deleteUser(id);
    res.json({
      message: `succes delete data dari ${id}`,
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
  getAllUsers,
  getUserByName,
  createNewUser,
  deleteUser,
  updateUser,
};
