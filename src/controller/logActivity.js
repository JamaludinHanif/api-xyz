const userModels = require("../models/logActivity");

const getAllLog = async (req, res) => {
  try {
    const [data] = await userModels.getAllLog();
    res.json({
      message: "get data dari tbl_log berhasil",
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

const createNewLog = async (req, res) => {
  const body = req.body;
  try {
    await userModels.createNewLog(body);
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

const getLogByDate = async (req, res) => {
  const date = req.query.date;
  try {
    const [data] = await userModels.getLogByDate(date);
    if (data.length > 1) {
      res.json({
        message: `berhasil get data dari tanggal : ${date}`,
        status: true,
        data: data,
      });
    } else {
      res.json({
        message: `data kosong dari tanggal : ${date}`,
        status: false,
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

module.exports = {
  getAllLog,
  getLogByDate,
  createNewLog,
};
