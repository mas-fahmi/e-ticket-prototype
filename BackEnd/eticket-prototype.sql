-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2023 at 05:34 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eticket-prototype`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_booking`
--

CREATE TABLE `tb_booking` (
  `id` int(11) NOT NULL,
  `id_ticket` varchar(50) NOT NULL,
  `nik` varchar(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `fest_name` varchar(50) NOT NULL,
  `payments` varchar(25) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`id`, `id_ticket`, `nik`, `name`, `address`, `fest_name`, `payments`, `date`) VALUES
(1, '7XeW4WOdtx', '10249129423', 'Gandana', 'Jln. Hiu Terdampar', 'ukaW ukaW', 'Mana', '2023-03-27 02:51:13'),
(2, 'vjsVLIywkX', '19212940129', 'Jimeh', 'Jln. Harimau Loreng', 'ukaW ukaW', 'Ngutang', '2023-03-27 03:17:13'),
(3, 'p3ahsJJePh', '10241828519', 'Dins', 'Jln. Harimau Loreng', 'ukaW ukaW', 'Ngutang', '2023-03-27 03:18:48'),
(4, 'Boc1g217F8', '10241828519', 'Mamans', 'Jln. Gajah Kejepit', 'ukaW ukaW', 'Ngutang', '2023-03-27 03:29:07');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order`
--

CREATE TABLE `tb_order` (
  `id` int(11) NOT NULL,
  `id_ticket` varchar(50) NOT NULL,
  `nik` varchar(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(100) NOT NULL,
  `fest_name` varchar(50) NOT NULL,
  `payments` varchar(25) NOT NULL,
  `transaction` enum('dibayar','belum dibayar') NOT NULL DEFAULT 'belum dibayar',
  `verification` enum('succes','failed') NOT NULL DEFAULT 'failed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_order`
--

INSERT INTO `tb_order` (`id`, `id_ticket`, `nik`, `name`, `dob`, `address`, `fest_name`, `payments`, `transaction`, `verification`) VALUES
(2, 'Uzl1qo8ECZ', '696969669', 'Kucing Pekob', '0000-00-00', 'Jln Kucing Ke Geleng', 'Waku Waku', 'Cutang', 'belum dibayar', 'failed'),
(3, 'eMuuyIcrrP', '912894824', 'Ceep Rujid', '0000-00-00', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', 'belum dibayar', 'failed'),
(4, 'LOQAwaFu3Q', '2512789232', 'Umam', '0000-00-00', 'Jln. Gajah Kejepit', 'Waku Waku', 'Orang Post', 'belum dibayar', 'failed'),
(6, 'PDreiKeTWO', '512841094580', 'Mamats', '0000-00-00', 'Jln. Avatar Merah', 'Waku Waku', 'Dana', 'dibayar', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_ticket`
--

CREATE TABLE `tb_ticket` (
  `id` int(11) NOT NULL,
  `id_ticket` varchar(50) NOT NULL,
  `nik` varchar(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `fest_name` varchar(50) NOT NULL,
  `payments` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_ticket`
--

INSERT INTO `tb_ticket` (`id`, `id_ticket`, `nik`, `name`, `address`, `fest_name`, `payments`) VALUES
(1, '7XeW4WOdtx', '10249129423', 'Gandana', 'Jln. Hiu Terdampar', 'ukaW ukaW', 'Mana'),
(3, 'vjsVLIywkX', '19212940129', 'Jimeh', 'Jln. Harimau Loreng', 'ukaW ukaW', 'Ngutang'),
(5, 'p3ahsJJePh', '10241828519', 'Dins', 'Jln. Harimau Loreng', 'ukaW ukaW', 'Ngutang'),
(6, 'Boc1g217F8', '10241828519', 'Mamans', 'Jln. Gajah Kejepit', 'ukaW ukaW', 'Ngutang');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_booking`
--
ALTER TABLE `tb_booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ticket` (`id_ticket`),
  ADD KEY `nik` (`nik`);

--
-- Indexes for table `tb_order`
--
ALTER TABLE `tb_order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_ticket` (`id_ticket`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- Indexes for table `tb_ticket`
--
ALTER TABLE `tb_ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ticket` (`id_ticket`),
  ADD KEY `nik` (`nik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_booking`
--
ALTER TABLE `tb_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_order`
--
ALTER TABLE `tb_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tb_ticket`
--
ALTER TABLE `tb_ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
