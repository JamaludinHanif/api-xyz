const dbPool = require("../config/database");

const getAllProducts = () => {
  const SQL = `SELECT * FROM tbl_barang`;

  return dbPool.execute(SQL);
};

const getProductByName = (namaBarang) => {
  const SQL = `SELECT * FROM tbl_barang WHERE nama_barang LIKE '%${namaBarang}%'`;

  return dbPool.execute(SQL);
};

const createNewProduct = (body) => {
  const SQL = ` INSERT INTO tbl_barang (id_barang, kode_barang, nama_barang, expired_date, jumlah_barang, satuan, harga_satuan) 
    VALUES ('', '${body.kode_barang}', '${body.nama_barang}', '${body.expired_date}', '${body.jumlah_barang}', '${body.satuan}', '${body.harga_satuan}')`;

  return dbPool.execute(SQL);
};

const updateProduct = (body, id) => {
  const SQL = ` UPDATE tbl_barang SET
                id_barang='${id}', kode_barang='${body.kode_barang}', nama_barang='${body.nama_barang}', expired_date='${body.expired_date}', jumlah_barang='${body.jumlah_barang}', satuan='${body.satuan}', harga_satuan='${body.harga_satuan}' 
                WHERE id_barang=${id}`;

  return dbPool.execute(SQL);
};

const deleteProduct = (id) => {
  const SQL = `DELETE FROM tbl_barang WHERE id_barang=${id}`;

  return dbPool.execute(SQL);
};

module.exports = {
  getAllProducts,
  getProductByName,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
