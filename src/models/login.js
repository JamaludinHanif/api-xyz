const dbPool = require('../config/database')

const login = (body) => {
    const SQL = `SELECT * FROM tbl_user WHERE username='${body.username}' AND password='${body.password}'`;

    return dbPool.execute(SQL);
}

module.exports = {
    login
};