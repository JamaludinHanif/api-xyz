-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2024 at 12:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_xyz`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_barang`
--

CREATE TABLE `tbl_barang` (
  `id_barang` int(11) NOT NULL,
  `kode_barang` varchar(50) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `expired_date` date NOT NULL,
  `jumlah_barang` bigint(20) NOT NULL,
  `satuan` varchar(50) NOT NULL,
  `harga_satuan` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_barang`
--

INSERT INTO `tbl_barang` (`id_barang`, `kode_barang`, `nama_barang`, `expired_date`, `jumlah_barang`, `satuan`, `harga_satuan`) VALUES
(4, 'gtq-1123', 'fanta', '2024-02-15', 12, 'botol', 5000),
(7, 'rtuj-132', 'Nabati keju', '2024-02-29', 40, 'kardus', 2000),
(10, 'gtu-000', 'Baju Messi', '2024-02-29', 3, 'pcs', 150000);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_log`
--

CREATE TABLE `tbl_log` (
  `id_log` int(11) NOT NULL,
  `waktu` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `aktivitas` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_log`
--

INSERT INTO `tbl_log` (`id_log`, `waktu`, `aktivitas`, `username`) VALUES
(29, '2024-02-13 03:39:02', 'logout', 'Hanif'),
(30, '2024-02-13 03:39:43', 'login', 'Hanif'),
(31, '2024-02-14 14:27:36', 'logout', 'Hanif'),
(32, '2024-02-14 14:27:46', 'login', 'Hanif'),
(33, '2024-02-14 14:48:09', 'logout', 'Hanif'),
(34, '2024-02-14 14:48:38', 'login', 'amanda'),
(35, '2024-02-14 14:57:40', 'logout', 'amanda'),
(36, '2024-02-14 15:15:43', 'login', 'tegar'),
(37, '2024-02-14 15:15:53', 'logout', 'tegar'),
(38, '2024-02-14 15:16:04', 'login', 'jamal'),
(39, '2024-02-14 15:39:15', 'login', 'jamal'),
(40, '2024-02-15 01:08:57', 'login', 'Hanif'),
(41, '2024-02-15 01:10:11', 'login', 'jamal'),
(42, '2024-02-15 02:34:40', 'login', 'aku_kasir'),
(43, '2024-02-18 14:26:02', 'login', 'Hanif'),
(44, '2024-02-18 14:27:37', 'login', 'aku_kasir'),
(45, '2024-02-18 14:29:31', 'logout', 'aku_kasir'),
(46, '2024-02-18 14:31:08', 'login', 'jamal'),
(47, '2024-02-18 15:15:58', 'login', 'aku_kasir');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_transaksi`
--

CREATE TABLE `tbl_transaksi` (
  `id_transaksi` int(11) NOT NULL,
  `no_transaksi` varchar(50) NOT NULL,
  `tgl_transaksi` date NOT NULL,
  `total_bayar` bigint(20) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `tipe_user` varchar(50) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` varchar(150) NOT NULL,
  `telepon` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `tipe_user`, `nama`, `alamat`, `telepon`, `username`, `password`) VALUES
(4, 'admin', 'admin1', 'cikaso', '085161310017', 'Hanif', '12345678'),
(7, 'admin', 'admin1', 'cikaso', '085161310017', 'tegar', '12345678'),
(9, 'gudang', 'jamal', 'kuningan', '083187270', 'jamal', 'gdg_kwr1234'),
(10, 'kasir', 'kasir2', 'Cirebon', '0183083031', 'aku_kasir', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `tes_express`
--

CREATE TABLE `tes_express` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `jurusan` varchar(50) NOT NULL,
  `hoby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tes_express`
--

INSERT INTO `tes_express` (`id`, `nama`, `jurusan`, `hoby`) VALUES
(2, 'jamal', 'Tata Boga', 'Main game eFootBall 2024'),
(3, 'Hanif', 'Rekayasa Perangkat Lunak', 'Mendengarkan musik');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `tbl_log`
--
ALTER TABLE `tbl_log`
  ADD PRIMARY KEY (`id_log`);

--
-- Indexes for table `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD UNIQUE KEY `id_barang` (`id_barang`),
  ADD UNIQUE KEY `id_user` (`id_user`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `tes_express`
--
ALTER TABLE `tes_express`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_barang`
--
ALTER TABLE `tbl_barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_log`
--
ALTER TABLE `tbl_log`
  MODIFY `id_log` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  MODIFY `id_transaksi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tes_express`
--
ALTER TABLE `tes_express`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  ADD CONSTRAINT `tbl_transaksi_ibfk_1` FOREIGN KEY (`id_barang`) REFERENCES `tbl_barang` (`id_barang`),
  ADD CONSTRAINT `tbl_transaksi_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
