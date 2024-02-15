const dbPool = require("../config/database");

const getAllLog = () => {
  const SQL = `SELECT * FROM tbl_log`;

  return dbPool.execute(SQL);
};

const getLogByDate = (date) => {
  const SQL = `SELECT * FROM tbl_log WHERE waktu LIKE '${date}'`;

  console.log(SQL)

  return dbPool.execute(SQL);
};

const createNewLog = (body) => {
  const SQL = ` INSERT INTO tbl_log (id_log, waktu, aktivitas, username)
      VALUES ('', '${body.waktu}', '${body.aktivitas}', '${body.username}')`;

  return dbPool.execute(SQL);
};

module.exports = {
  getAllLog,
  getLogByDate,
  createNewLog,
};
