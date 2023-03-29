-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 06:14 AM
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
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `verification` enum('Di Bayar','Blm Bayar') NOT NULL DEFAULT 'Blm Bayar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`id`, `id_ticket`, `nik`, `name`, `address`, `fest_name`, `payments`, `date`, `verification`) VALUES
(1, 'yohysuoxAN', '10293151245', 'Timoti', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', '2023-03-27 06:51:59', 'Blm Bayar'),
(2, '0wIt8vWMK2', '91240052851', 'Yayan', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', '2023-03-27 06:52:24', 'Blm Bayar'),
(3, 'DJSSEbQNla', '1029312542', 'Imeh', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', '2023-03-27 08:48:43', 'Blm Bayar'),
(4, 'lQukoQSmPl', '12345678912', 'Pirman', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', '2023-03-27 08:49:09', 'Blm Bayar'),
(5, '3JQRjBXrDR', '1924102951', 'Maman', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', '2023-03-27 09:00:47', 'Blm Bayar');

--
-- Triggers `tb_booking`
--
DELIMITER $$
CREATE TRIGGER `after_delete` AFTER DELETE ON `tb_booking` FOR EACH ROW UPDATE tb_fest SET slot = slot + 1
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `contoh` AFTER INSERT ON `tb_booking` FOR EACH ROW UPDATE tb_fest
SET slot = slot - 1
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tb_fest`
--

CREATE TABLE `tb_fest` (
  `id` int(11) NOT NULL,
  `fest_name` varchar(25) NOT NULL,
  `price` int(50) NOT NULL,
  `slot` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_fest`
--

INSERT INTO `tb_fest` (`id`, `fest_name`, `price`, `slot`) VALUES
(2, 'Waku Waku', 87000, 16);

--
-- Triggers `tb_fest`
--
DELIMITER $$
CREATE TRIGGER `contoh1` AFTER UPDATE ON `tb_fest` FOR EACH ROW IF NEW.slot < 0 THEN
SIGNAL SQLSTATE '50001' SET MESSAGE_TEXT = 'Tiket Beak Bous.';
END IF
$$
DELIMITER ;

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
  `payments` varchar(25) NOT NULL,
  `verification` enum('Valid','In Valid') NOT NULL DEFAULT 'In Valid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_ticket`
--

INSERT INTO `tb_ticket` (`id`, `id_ticket`, `nik`, `name`, `address`, `fest_name`, `payments`, `verification`) VALUES
(1, 'yohysuoxAN', '10293151245', 'Timoti', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', 'In Valid'),
(2, '0wIt8vWMK2', '91240052851', 'Yayan', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', 'In Valid'),
(3, 'DJSSEbQNla', '1029312542', 'Imeh', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', 'In Valid'),
(4, 'lQukoQSmPl', '12345678912', 'Pirman', 'Jln. Gajah Kejepit', 'Waku Waku', 'Bankir', 'In Valid'),
(5, '3JQRjBXrDR', '1924102951', 'Maman', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', 'In Valid'),
(6, '6A5EVZIDKj', '6912312985293', 'Nining', 'Jln. Gajah Kejepit', 'Waku Waku', 'Dana', 'In Valid');

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
-- Indexes for table `tb_fest`
--
ALTER TABLE `tb_fest`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_fest`
--
ALTER TABLE `tb_fest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_ticket`
--
ALTER TABLE `tb_ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
