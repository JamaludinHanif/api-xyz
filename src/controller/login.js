const userModels = require("../models/login");

const login = async (req, res) => {
  const body = req.body;
  const [data] = await userModels.login(body);

  // console.log('ini data dari db',data.length);
  try {
    if (data.length == 1) {
      res.json({
        message: "login berhasil",
        status: true,
        loginAs: data[0].tipe_user,
        username: data[0].username
      });
    } else if (data.length > 1) {
      res.json({
        message: "data ditemukan lebih dari 2",
        status: false,
        data: data,
      });
    } else {
      res.json({
        message:
          "login gagal, silahkan periksa kembali username dan password anda",
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

module.exports = login;
