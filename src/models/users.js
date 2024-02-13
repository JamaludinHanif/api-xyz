const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQL = `SELECT * FROM tbl_user`;

  return dbPool.execute(SQL);
};

const createNewUsers = (body) => {
  const SQL = ` INSERT INTO tbl_user (id_user, tipe_user, nama, alamat, telepon, username, password) 
    VALUES ('', '${body.tipe_user}', '${body.nama}', '${body.alamat}', '${body.telepon}', '${body.username}', '${body.password}')`;

  return dbPool.execute(SQL);
};

const updateUser = (body, id) => {
  const SQL = ` UPDATE tbl_user SET
                id_user='${id}', tipe_user='${body.tipe_user}', nama='${body.nama}', alamat='${body.alamat}', telepon='${body.telepon}', username='${body.username}', password='${body.password}' 
                WHERE id_user=${id}`;

  return dbPool.execute(SQL);
};

const deleteUser = (id) => {
  const SQL = `DELETE FROM tbl_user WHERE id_user=${id}`;

  return dbPool.execute(SQL);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  deleteUser,
  updateUser
};
