const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQL = "SELECT * FROM tes_express";

  return dbPool.execute(SQL);
};

const getUser = (id) => {
  const SQL = `SELECT * FROM tes_express WHERE id=${id}`;

  return dbPool.execute(SQL);
};

const createNewUsers = (body) => {
  const SQL = ` INSERT INTO tes_express (nama, jurusan, hoby) 
                VALUES ('${body.nama}', '${body.jurusan}', '${body.hoby}')`;

  return dbPool.execute(SQL);
};

const updateUser = (body, id) => {
  const SQL = ` UPDATE tes_express SET
                nama='${body.nama}', jurusan='${body.jurusan}', hoby='${body.hoby}' 
                WHERE id=${id}`;

  return dbPool.execute(SQL);
};

const deleteUser = (id) => {
  const SQL = `DELETE FROM tes_express WHERE id=${id}`;

  return dbPool.execute(SQL);
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUsers,
  updateUser,
  deleteUser,
};
