-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2023 at 04:41 PM
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
-- Table structure for table `tb_admin`
--

CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_admin`
--

INSERT INTO `tb_admin` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'mamat', 'mamatJago@gmail.com', '$2b$10$u95GnOENF.lJrxuKaxUHs..tgpfS6IuImjBTRGFODfr5aR0OXG9x.', NULL, '2023-03-30 05:43:25', '2023-03-30 06:31:40');

-- --------------------------------------------------------

--
-- Table structure for table `tb_booking`
--

CREATE TABLE `tb_booking` (
  `id` int(11) NOT NULL,
  `id_ticket` varchar(50) NOT NULL,
  `nik` varchar(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fest_name` varchar(50) NOT NULL,
  `payments` varchar(25) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `verification` enum('Di Bayar','Blm Bayar') NOT NULL DEFAULT 'Blm Bayar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`id`, `id_ticket`, `nik`, `name`, `email`, `fest_name`, `payments`, `date`, `verification`) VALUES
(1, '2Bnsroyl2x', '1029125929', 'Bento', 'bento123@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 03:53:39', 'Blm Bayar'),
(2, '8nVXwUWjaz', '01295120509', 'mamat', 'mamatnih@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 07:00:54', ''),
(3, 'EciDYuCvQl', '1295120509', 'Babon', 'Babon468@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 03:54:29', 'Blm Bayar'),
(4, 'zmn9XwRUzE', '1295120509', 'Bobon', 'bobon69@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 03:54:44', 'Blm Bayar'),
(5, 'nglNUgM000', '1295120509', 'Ratih', 'Ratih00@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 03:55:27', 'Blm Bayar'),
(6, 'NYeDS1vULU', '1295120509', 'Kaka', 'kaka0o0@gmail.com', 'Waku Waku', 'Dana', '2023-03-29 03:55:49', 'Blm Bayar');

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
(2, 'Waku Waku', 87000, 1);

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
  `email` varchar(255) NOT NULL,
  `fest_name` varchar(50) NOT NULL,
  `payments` varchar(25) NOT NULL,
  `verification` enum('Valid','In Valid') NOT NULL DEFAULT 'In Valid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_ticket`
--

INSERT INTO `tb_ticket` (`id`, `id_ticket`, `nik`, `name`, `email`, `fest_name`, `payments`, `verification`) VALUES
(7, '2Bnsroyl2x', '1029125929', 'Bento', 'bento123@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(8, '8nVXwUWjaz', '1295120509', 'Gajah', 'Gajah321@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(9, 'EciDYuCvQl', '1295120509', 'Babon', 'Babon468@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(10, 'zmn9XwRUzE', '1295120509', 'Bobon', 'bobon69@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(11, 'nglNUgM000', '1295120509', 'Ratih', 'Ratih00@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(12, 'NYeDS1vULU', '1295120509', 'Kaka', 'kaka0o0@gmail.com', 'Waku Waku', 'Dana', 'In Valid'),
(13, 'ompbfkxXmw', '1295120509', 'Xanchi', 'xanchi34@gmail.com', 'Waku Waku', 'Dana', 'In Valid');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Jimbeh', 'JimbehJago@gmail.com', '$2b$10$o20hku9CgkJqPhOkymo9WOs6JzYWzutgR7mV4pPblLq/z2nVwj48q', NULL, '2023-03-30 07:10:37', '2023-03-30 07:10:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tb_booking`
--
ALTER TABLE `tb_booking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_ticket_2` (`id_ticket`,`nik`);

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
  ADD UNIQUE KEY `id_ticket_2` (`id_ticket`,`nik`),
  ADD KEY `id_ticket` (`id_ticket`),
  ADD KEY `nik` (`nik`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_admin`
--
ALTER TABLE `tb_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_booking`
--
ALTER TABLE `tb_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tb_fest`
--
ALTER TABLE `tb_fest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_ticket`
--
ALTER TABLE `tb_ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `auto_delete` ON SCHEDULE EVERY 1 SECOND STARTS '2023-04-01 21:40:03' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM tb_booking WHERE date < DATE_SUB(NOW(), INTERVAL 1 MINUTE)$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
