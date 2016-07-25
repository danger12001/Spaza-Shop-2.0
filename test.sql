-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 15, 2016 at 01:13 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `travis_db`
--
CREATE DATABASE IF NOT EXISTS `travis_db`;
-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `category` char(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(2, 'Baked Goods'),
(3, 'Canned Goods'),
(5, 'Cereal'),
(6, 'Dairy'),
(1, 'Fruit'),
(7, 'Hygiene'),
(8, 'Meat'),
(9, 'Other'),
(4, 'Sweets');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL,
  `product` varchar(30) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product` (`product`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product`, `category_id`, `price`) VALUES
(1, 'Breadz', 6, 1.00),
(2, 'Imasi', 6, 25.00),
(3, 'Bread', 2, 12.00),
(4, 'Chakalaka Can', 3, 10.00),
(5, 'Coke 500ml', 4, 6.50),
(6, 'Cream Soda 500ml', 4, 7.50),
(7, 'Fanta 500ml', 4, 6.50),
(8, 'Gold Dish Vegetable Curry Can', 3, 9.00),
(9, 'Iwisa Pap 5kg', 5, 30.00),
(10, 'Milk 1l', 6, 10.00),
(11, 'Mixed Sweets 5s', 4, 2.00),
(12, 'Shampoo 1 litre', 7, 30.00),
(13, 'Soap Bar', 7, 6.00),
(14, 'Top Class Soy Mince', 8, 12.00),
(15, 'Heart Chocolates', 4, 35.00),
(16, 'Rose (plastic)', 9, 15.00),
(17, 'Apples - loose', 1, 2.00),
(18, 'Valentine Cards', 9, 4.00);

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE IF NOT EXISTS `purchases` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `quantity` int(11) NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `date`, `quantity`, `cost`, `product_id`) VALUES
(1, '2001-01-23', 3, 7.00, 4),
(2, '2001-01-23', 3, 3.00, 5),
(3, '2001-01-23', 4, 4.00, 6),
(4, '2001-01-23', 2, 4.00, 7),
(5, '2001-01-23', 2, 5.00, 8),
(6, '2001-01-23', 1, 17.00, 2),
(7, '2001-01-23', 3, 20.00, 9),
(8, '2001-01-23', 4, 7.00, 10),
(9, '2001-01-23', 5, 8.00, 14),
(10, '2001-01-28', 4, 1.00, 1),
(11, '2001-01-28', 10, 1.00, 17),
(12, '2001-01-28', 60, 3.00, 11),
(13, '2001-01-28', 1, 20.00, 12),
(14, '2001-01-28', 3, 3.00, 13),
(15, '2001-01-28', 30, 9.00, 3),
(16, '2001-01-28', 15, 7.00, 4),
(17, '2001-01-28', 36, 3.00, 5),
(18, '2001-01-28', 24, 4.00, 6),
(19, '2001-01-28', 24, 4.00, 7),
(20, '2001-01-28', 15, 5.00, 8),
(21, '2001-01-28', 15, 17.00, 2),
(22, '2001-01-28', 15, 20.00, 9),
(23, '2001-01-28', 25, 7.00, 10),
(24, '2001-01-28', 10, 8.00, 14),
(25, '2001-02-02', 1, 20.00, 12),
(26, '2001-02-02', 3, 3.00, 13),
(27, '2001-02-03', 12, 1.00, 1),
(28, '2001-02-03', 100, 1.00, 17),
(29, '2001-02-03', 240, 3.00, 11),
(30, '2001-02-04', 2, 20.00, 12),
(31, '2001-02-04', 5, 3.00, 13),
(32, '2001-02-04', 4, 11.00, 3),
(33, '2001-02-04', 4, 24.00, 2),
(34, '2001-02-06', 8, 1.00, 1),
(35, '2001-02-06', 100, 1.00, 17),
(36, '2001-02-06', 150, 3.00, 11),
(37, '2001-02-06', 5, 3.00, 13),
(38, '2001-02-06', 30, 9.00, 3),
(39, '2001-02-06', 15, 7.00, 4),
(40, '2001-02-06', 36, 3.00, 5),
(41, '2001-02-06', 18, 4.00, 6),
(42, '2001-02-06', 24, 4.00, 7),
(43, '2001-02-06', 15, 5.00, 8),
(44, '2001-02-06', 25, 17.00, 2),
(45, '2001-02-06', 5, 20.00, 9),
(46, '2001-02-06', 10, 7.00, 10),
(47, '2001-02-06', 10, 8.00, 14),
(48, '2001-02-09', 20, 10.00, 16),
(49, '2001-02-09', 3, 9.00, 10),
(50, '2001-02-10', 4, 1.00, 1),
(51, '2001-02-10', 20, 1.00, 17),
(52, '2001-02-10', 150, 3.00, 11),
(53, '2001-02-10', 10, 9.00, 3),
(54, '2001-02-10', 15, 7.00, 4),
(55, '2001-02-10', 18, 3.00, 5),
(56, '2001-02-10', 5, 5.00, 8),
(57, '2001-02-10', 20, 25.00, 15),
(58, '2001-02-10', 10, 17.00, 2),
(59, '2001-02-10', 5, 20.00, 9),
(60, '2001-02-10', 10, 7.00, 10),
(61, '2001-02-10', 15, 8.00, 14),
(62, '2001-02-11', 2, 20.00, 12),
(63, '2001-02-11', 20, 2.00, 18),
(64, '2001-02-12', 3, 9.00, 10),
(65, '2001-02-13', 4, 1.00, 1),
(66, '2001-02-13', 50, 3.00, 11),
(67, '2001-02-13', 3, 20.00, 12),
(68, '2001-02-13', 5, 3.00, 13),
(69, '2001-02-13', 5, 8.00, 8),
(70, '2001-02-13', 5, 9.00, 3),
(71, '2001-02-13', 12, 3.00, 5),
(72, '2001-02-13', 12, 4.00, 7),
(73, '2001-02-13', 20, 17.00, 2),
(74, '2001-02-13', 15, 7.00, 10),
(75, '2001-02-13', 5, 8.00, 14),
(76, '2001-02-14', 1, 20.00, 12),
(77, '2001-02-14', 2, 8.00, 8),
(78, '2001-02-16', 2, 8.00, 4),
(79, '2001-02-16', 2, 7.00, 6),
(80, '2001-02-16', 1, 6.00, 7),
(81, '2001-02-16', 2, 8.00, 8),
(82, '2001-02-16', 1, 30.00, 9),
(83, '2001-02-16', 6, 9.00, 10),
(84, '2001-02-17', 60, 1.00, 17),
(85, '2001-02-17', 12, 3.00, 11),
(86, '2001-02-17', 15, 9.00, 3),
(87, '2001-02-17', 10, 7.00, 4),
(88, '2001-02-17', 24, 3.00, 5),
(89, '2001-02-17', 12, 4.00, 6),
(90, '2001-02-17', 12, 4.00, 7),
(91, '2001-02-17', 10, 5.00, 8),
(92, '2001-02-17', 15, 17.00, 2),
(93, '2001-02-17', 5, 20.00, 9),
(94, '2001-02-17', 15, 7.00, 10),
(95, '2001-02-17', 5, 8.00, 14),
(96, '2001-02-18', 1, 20.00, 12),
(97, '2001-02-18', 5, 3.00, 13),
(98, '2001-02-19', 2, 20.00, 12),
(99, '2001-02-19', 1, 9.00, 10),
(100, '2001-02-20', 20, 1.00, 1),
(101, '2001-02-20', 90, 1.00, 17),
(102, '2001-02-20', 20, 3.00, 11),
(103, '2001-02-20', 2, 20.00, 12),
(104, '2001-02-20', 3, 3.00, 13),
(105, '2001-02-20', 10, 9.00, 3),
(106, '2001-02-20', 10, 17.00, 2),
(107, '2001-02-20', 5, 20.00, 9),
(108, '2001-02-20', 15, 7.00, 10),
(109, '2001-02-20', 10, 8.00, 14),
(110, '2001-02-23', 3, 9.00, 4),
(111, '2001-02-24', 10, 1.00, 1),
(112, '2001-02-24', 90, 1.00, 17),
(113, '2001-02-24', 8, 3.00, 11),
(114, '2001-02-24', 15, 9.00, 3),
(115, '2001-02-24', 10, 7.00, 4),
(116, '2001-02-24', 18, 3.00, 5),
(117, '2001-02-24', 6, 4.00, 6),
(118, '2001-02-24', 6, 4.00, 7),
(119, '2001-02-24', 10, 5.00, 8),
(120, '2001-02-24', 15, 17.00, 2),
(121, '2001-02-24', 20, 7.00, 10),
(122, '2001-02-24', 15, 8.00, 14),
(123, '2001-02-25', 5, 3.00, 13),
(124, '2001-02-26', 2, 20.00, 12),
(125, '2001-02-26', 5, 3.00, 13),
(126, '2001-02-26', 1, 11.00, 3),
(127, '2001-02-26', 2, 6.00, 7),
(128, '2001-02-26', 1, 8.00, 8),
(129, '2001-02-26', 1, 30.00, 9),
(130, '2001-02-27', 10, 1.00, 1),
(131, '2001-02-27', 60, 1.00, 17),
(132, '2001-02-27', 5, 20.00, 12),
(133, '2001-02-27', 5, 3.00, 13),
(134, '2001-02-27', 20, 9.00, 3),
(135, '2001-02-27', 15, 7.00, 4),
(136, '2001-02-27', 24, 3.00, 5),
(137, '2001-02-27', 12, 4.00, 6),
(138, '2001-02-27', 12, 4.00, 7),
(139, '2001-02-27', 15, 5.00, 8),
(140, '2001-02-27', 15, 17.00, 2),
(141, '2001-02-27', 10, 20.00, 9),
(142, '2001-02-27', 20, 7.00, 10),
(143, '2001-02-27', 15, 8.00, 14),
(144, '2001-02-28', 2, 20.00, 12),
(145, '2001-02-28', 3, 3.00, 13),
(146, '2001-02-28', 3, 8.00, 4),
(147, '2001-02-28', 2, 8.00, 8),
(148, '2001-02-28', 5, 11.00, 14),
(149, '2001-03-01', 2, 20.00, 12),
(150, '2001-03-01', 5, 3.00, 13),
(151, '2001-03-01', 3, 8.00, 4),
(152, '2001-03-01', 2, 8.00, 8),
(153, '2001-03-01', 3, 11.00, 14);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `sold` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `date`, `product_id`, `sold`, `price`) VALUES
(1, '2001-02-01', 2, 1, 25.00),
(2, '2001-02-01', 3, 2, 12.00),
(3, '2001-02-01', 4, 3, 10.00),
(4, '2001-02-01', 8, 2, 9.00),
(5, '2001-02-01', 7, 3, 6.50),
(6, '2001-02-01', 5, 2, 6.50),
(7, '2001-02-01', 6, 2, 7.50),
(8, '2001-02-01', 9, 0, 30.00),
(9, '2001-02-01', 14, 2, 12.00),
(10, '2001-02-01', 12, 1, 30.00),
(11, '2001-02-01', 13, 0, 6.00),
(12, '2001-02-01', 1, 3, 2.00),
(13, '2001-02-01', 17, 5, 2.00),
(14, '2001-02-01', 11, 9, 3.00),
(15, '2001-02-02', 10, 4, 10.00),
(16, '2001-02-02', 2, 4, 25.00),
(17, '2001-02-02', 3, 5, 12.00),
(18, '2001-02-02', 4, 4, 10.00),
(19, '2001-02-02', 8, 5, 9.00),
(20, '2001-02-02', 7, 5, 6.50),
(21, '2001-02-02', 5, 8, 6.50),
(22, '2001-02-02', 6, 4, 7.50),
(23, '2001-02-02', 9, 5, 30.00),
(24, '2001-02-02', 14, 3, 12.00),
(25, '2001-02-02', 12, 0, 30.00),
(26, '2001-02-02', 13, 2, 6.00),
(27, '2001-02-02', 1, 0, 2.00),
(28, '2001-02-02', 17, 0, 2.00),
(29, '2001-02-02', 11, 0, 3.00),
(30, '2001-02-03', 10, 7, 10.00),
(31, '2001-02-03', 2, 4, 25.00),
(32, '2001-02-03', 3, 7, 12.00),
(33, '2001-02-03', 4, 4, 10.00),
(34, '2001-02-03', 8, 2, 9.00),
(35, '2001-02-03', 7, 5, 6.50),
(36, '2001-02-03', 5, 8, 6.50),
(37, '2001-02-03', 6, 3, 7.50),
(38, '2001-02-03', 9, 3, 30.00),
(39, '2001-02-03', 14, 3, 12.00),
(40, '2001-02-03', 12, 0, 30.00),
(41, '2001-02-03', 13, 2, 6.00),
(42, '2001-02-03', 1, 10, 2.00),
(43, '2001-02-03', 17, 8, 2.00),
(44, '2001-02-03', 11, 15, 2.00),
(45, '2001-02-04', 10, 5, 10.00),
(46, '2001-02-04', 2, 8, 25.00),
(47, '2001-02-04', 3, 8, 12.00),
(48, '2001-02-04', 4, 2, 10.00),
(49, '2001-02-04', 8, 0, 9.00),
(50, '2001-02-04', 7, 7, 6.50),
(51, '2001-02-04', 5, 12, 6.50),
(52, '2001-02-04', 6, 2, 7.50),
(53, '2001-02-04', 9, 1, 30.00),
(54, '2001-02-04', 14, 4, 12.00),
(55, '2001-02-04', 12, 1, 30.00),
(56, '2001-02-04', 13, 3, 6.00),
(57, '2001-02-04', 1, 16, 2.00),
(58, '2001-02-04', 17, 8, 2.00),
(59, '2001-02-04', 11, 12, 2.00),
(60, '2001-02-05', 10, 10, 10.00),
(61, '2001-02-05', 2, 3, 25.00),
(62, '2001-02-05', 3, 12, 12.00),
(63, '2001-02-05', 4, 3, 10.00),
(64, '2001-02-05', 8, 6, 9.00),
(65, '2001-02-05', 7, 3, 6.50),
(66, '2001-02-05', 5, 9, 6.50),
(67, '2001-02-05', 6, 8, 7.50),
(68, '2001-02-05', 9, 2, 30.00),
(69, '2001-02-05', 14, 1, 12.00),
(70, '2001-02-05', 12, 0, 30.00),
(71, '2001-02-05', 13, 1, 6.00),
(72, '2001-02-05', 1, 8, 2.00),
(73, '2001-02-05', 17, 12, 2.00),
(74, '2001-02-05', 11, 5, 3.00),
(75, '2001-02-06', 10, 6, 10.00),
(76, '2001-02-06', 2, 4, 25.00),
(77, '2001-02-06', 3, 7, 12.00),
(78, '2001-02-06', 4, 5, 10.00),
(79, '2001-02-06', 8, 2, 9.00),
(80, '2001-02-06', 7, 7, 6.50),
(81, '2001-02-06', 5, 8, 6.50),
(82, '2001-02-06', 6, 3, 7.50),
(83, '2001-02-06', 9, 6, 30.00),
(84, '2001-02-06', 14, 8, 12.00),
(85, '2001-02-06', 12, 1, 30.00),
(86, '2001-02-06', 13, 3, 6.00),
(87, '2001-02-06', 1, 2, 2.00),
(88, '2001-02-06', 17, 0, 2.00),
(89, '2001-02-06', 11, 5, 3.00),
(90, '2001-02-07', 10, 4, 10.00),
(91, '2001-02-07', 2, 6, 25.00),
(92, '2001-02-07', 3, 4, 12.00),
(93, '2001-02-07', 4, 2, 10.00),
(94, '2001-02-07', 8, 0, 9.00),
(95, '2001-02-07', 7, 3, 6.50),
(96, '2001-02-07', 5, 7, 6.50),
(97, '2001-02-07', 6, 0, 7.50),
(98, '2001-02-07', 9, 0, 30.00),
(99, '2001-02-07', 14, 1, 12.00),
(100, '2001-02-07', 12, 0, 30.00),
(101, '2001-02-07', 13, 1, 6.00),
(102, '2001-02-07', 1, 8, 2.00),
(103, '2001-02-07', 17, 3, 2.00),
(104, '2001-02-07', 11, 3, 3.00),
(105, '2001-02-08', 10, 0, 10.00),
(106, '2001-02-08', 2, 2, 25.00),
(107, '2001-02-08', 3, 2, 12.00),
(108, '2001-02-08', 4, 1, 10.00),
(109, '2001-02-08', 8, 0, 9.00),
(110, '2001-02-08', 7, 4, 6.50),
(111, '2001-02-08', 5, 4, 6.50),
(112, '2001-02-08', 6, 1, 7.50),
(113, '2001-02-08', 9, 1, 30.00),
(114, '2001-02-08', 14, 2, 12.00),
(115, '2001-02-08', 12, 0, 30.00),
(116, '2001-02-08', 13, 1, 6.00),
(117, '2001-02-08', 1, 5, 2.00),
(118, '2001-02-08', 17, 2, 2.00),
(119, '2001-02-08', 11, 9, 3.00),
(120, '2001-02-09', 10, 3, 10.00),
(121, '2001-02-09', 2, 6, 25.00),
(122, '2001-02-09', 3, 7, 12.00),
(123, '2001-02-09', 4, 5, 10.00),
(124, '2001-02-09', 8, 6, 9.00),
(125, '2001-02-09', 7, 3, 6.50),
(126, '2001-02-09', 5, 8, 6.50),
(127, '2001-02-09', 6, 5, 7.50),
(128, '2001-02-09', 9, 2, 30.00),
(129, '2001-02-09', 14, 1, 12.00),
(130, '2001-02-09', 12, 0, 30.00),
(131, '2001-02-09', 13, 0, 6.00),
(132, '2001-02-09', 1, 5, 2.00),
(133, '2001-02-09', 17, 0, 2.00),
(134, '2001-02-09', 11, 3, 3.00),
(135, '2001-02-10', 10, 5, 10.00),
(136, '2001-02-10', 2, 4, 25.00),
(137, '2001-02-10', 3, 2, 12.00),
(138, '2001-02-10', 4, 0, 10.00),
(139, '2001-02-10', 8, 0, 9.00),
(140, '2001-02-10', 7, 1, 6.50),
(141, '2001-02-10', 5, 3, 6.50),
(142, '2001-02-10', 6, 2, 7.50),
(143, '2001-02-10', 9, 1, 30.00),
(144, '2001-02-10', 14, 3, 12.00),
(145, '2001-02-10', 12, 1, 30.00),
(146, '2001-02-10', 13, 0, 6.00),
(147, '2001-02-10', 1, 3, 2.00),
(148, '2001-02-10', 17, 2, 2.00),
(149, '2001-02-10', 11, 7, 2.00),
(150, '2001-02-10', 15, 3, 35.00),
(151, '2001-02-10', 16, 1, 15.00),
(152, '2001-02-11', 10, 5, 10.00),
(153, '2001-02-11', 2, 4, 25.00),
(154, '2001-02-11', 3, 3, 12.00),
(155, '2001-02-11', 4, 2, 10.00),
(156, '2001-02-11', 8, 1, 9.00),
(157, '2001-02-11', 7, 2, 6.50),
(158, '2001-02-11', 5, 3, 6.50),
(159, '2001-02-11', 6, 1, 7.50),
(160, '2001-02-11', 9, 0, 30.00),
(161, '2001-02-11', 14, 2, 12.00),
(162, '2001-02-11', 12, 1, 30.00),
(163, '2001-02-11', 13, 0, 6.00),
(164, '2001-02-11', 1, 4, 2.00),
(165, '2001-02-11', 17, 3, 2.00),
(166, '2001-02-11', 11, 8, 2.00),
(167, '2001-02-11', 15, 5, 35.00),
(168, '2001-02-11', 16, 3, 15.00),
(169, '2001-02-12', 10, 3, 10.00),
(170, '2001-02-12', 2, 9, 25.00),
(171, '2001-02-12', 3, 2, 12.00),
(172, '2001-02-12', 4, 3, 10.00),
(173, '2001-02-12', 8, 1, 9.00),
(174, '2001-02-12', 7, 0, 6.50),
(175, '2001-02-12', 5, 2, 6.50),
(176, '2001-02-12', 6, 1, 7.50),
(177, '2001-02-12', 9, 0, 30.00),
(178, '2001-02-12', 14, 2, 12.00),
(179, '2001-02-12', 12, 0, 30.00),
(180, '2001-02-12', 13, 2, 6.00),
(181, '2001-02-12', 1, 2, 2.00),
(182, '2001-02-12', 17, 3, 2.00),
(183, '2001-02-12', 11, 3, 3.00),
(184, '2001-02-12', 15, 2, 35.00),
(185, '2001-02-12', 18, 6, 4.00),
(186, '2001-02-12', 16, 2, 15.00),
(187, '2001-02-13', 10, 6, 10.00),
(188, '2001-02-13', 2, 6, 25.00),
(189, '2001-02-13', 3, 5, 12.00),
(190, '2001-02-13', 4, 7, 10.00),
(191, '2001-02-13', 8, 15, 9.00),
(192, '2001-02-13', 7, 6, 6.50),
(193, '2001-02-13', 5, 8, 6.50),
(194, '2001-02-13', 6, 4, 7.50),
(195, '2001-02-13', 9, 3, 30.00),
(196, '2001-02-13', 14, 4, 12.00),
(197, '2001-02-13', 12, 4, 30.00),
(198, '2001-02-13', 13, 2, 6.00),
(199, '2001-02-13', 1, 4, 2.00),
(200, '2001-02-13', 17, 2, 2.00),
(201, '2001-02-13', 11, 6, 3.00),
(202, '2001-02-13', 15, 10, 35.00),
(203, '2001-02-13', 18, 5, 4.00),
(204, '2001-02-13', 16, 7, 15.00),
(205, '2001-02-14', 10, 6, 10.00),
(206, '2001-02-14', 2, 5, 25.00),
(207, '2001-02-14', 3, 7, 12.00),
(208, '2001-02-14', 4, 3, 10.00),
(209, '2001-02-14', 8, 4, 9.00),
(210, '2001-02-14', 7, 7, 6.50),
(211, '2001-02-14', 5, 14, 6.50),
(212, '2001-02-14', 6, 8, 7.50),
(213, '2001-02-14', 9, 3, 30.00),
(214, '2001-02-14', 14, 7, 12.00),
(215, '2001-02-14', 12, 0, 30.00),
(216, '2001-02-14', 13, 0, 6.00),
(217, '2001-02-14', 1, 5, 2.00),
(218, '2001-02-14', 17, 9, 2.00),
(219, '2001-02-14', 11, 18, 3.00),
(220, '2001-02-14', 15, 0, 35.00),
(221, '2001-02-14', 18, 3, 4.00),
(222, '2001-02-14', 16, 1, 15.00),
(223, '2001-02-15', 10, 2, 10.00),
(224, '2001-02-15', 2, 2, 25.00),
(225, '2001-02-15', 3, 1, 12.00),
(226, '2001-02-15', 4, 3, 10.00),
(227, '2001-02-15', 8, 0, 9.00),
(228, '2001-02-15', 7, 5, 6.50),
(229, '2001-02-15', 5, 4, 6.50),
(230, '2001-02-15', 6, 2, 7.50),
(231, '2001-02-15', 9, 0, 30.00),
(232, '2001-02-15', 14, 1, 12.00),
(233, '2001-02-15', 12, 0, 30.00),
(234, '2001-02-15', 13, 1, 6.00),
(235, '2001-02-15', 1, 1, 2.00),
(236, '2001-02-15', 17, 1, 2.00),
(237, '2001-02-15', 11, 3, 3.00),
(238, '2001-02-16', 10, 7, 10.00),
(239, '2001-02-16', 2, 6, 25.00),
(240, '2001-02-16', 3, 4, 12.00),
(241, '2001-02-16', 4, 3, 10.00),
(242, '2001-02-16', 8, 2, 9.00),
(243, '2001-02-16', 7, 2, 6.50),
(244, '2001-02-16', 5, 1, 6.50),
(245, '2001-02-16', 6, 2, 7.50),
(246, '2001-02-16', 9, 2, 30.00),
(247, '2001-02-16', 14, 1, 12.00),
(248, '2001-02-16', 12, 0, 30.00),
(249, '2001-02-16', 13, 2, 6.00),
(250, '2001-02-16', 1, 2, 2.00),
(251, '2001-02-16', 17, 3, 2.00),
(252, '2001-02-16', 11, 5, 3.00),
(253, '2001-02-17', 10, 8, 10.00),
(254, '2001-02-17', 2, 6, 25.00),
(255, '2001-02-17', 3, 3, 12.00),
(256, '2001-02-17', 4, 0, 10.00),
(257, '2001-02-17', 8, 0, 9.00),
(258, '2001-02-17', 7, 0, 6.50),
(259, '2001-02-17', 5, 2, 6.50),
(260, '2001-02-17', 6, 0, 7.50),
(261, '2001-02-17', 9, 1, 30.00),
(262, '2001-02-17', 14, 2, 12.00),
(263, '2001-02-17', 12, 0, 30.00),
(264, '2001-02-17', 13, 1, 6.00),
(265, '2001-02-17', 1, 2, 2.00),
(266, '2001-02-17', 17, 6, 2.00),
(267, '2001-02-17', 11, 5, 2.00),
(268, '2001-02-18', 10, 3, 10.00),
(269, '2001-02-18', 2, 5, 25.00),
(270, '2001-02-18', 3, 5, 12.00),
(271, '2001-02-18', 4, 1, 10.00),
(272, '2001-02-18', 8, 0, 9.00),
(273, '2001-02-18', 7, 0, 6.50),
(274, '2001-02-18', 5, 3, 6.50),
(275, '2001-02-18', 6, 2, 7.50),
(276, '2001-02-18', 9, 1, 30.00),
(277, '2001-02-18', 14, 1, 12.00),
(278, '2001-02-18', 12, 1, 30.00),
(279, '2001-02-18', 13, 1, 6.00),
(280, '2001-02-18', 1, 1, 2.00),
(281, '2001-02-18', 17, 3, 2.00),
(282, '2001-02-18', 11, 2, 2.00),
(283, '2001-02-19', 10, 5, 10.00),
(284, '2001-02-19', 2, 3, 25.00),
(285, '2001-02-19', 3, 5, 12.00),
(286, '2001-02-19', 4, 2, 10.00),
(287, '2001-02-19', 8, 1, 9.00),
(288, '2001-02-19', 7, 1, 6.50),
(289, '2001-02-19', 5, 1, 6.50),
(290, '2001-02-19', 6, 0, 7.50),
(291, '2001-02-19', 9, 0, 30.00),
(292, '2001-02-19', 14, 2, 12.00),
(293, '2001-02-19', 12, 2, 30.00),
(294, '2001-02-19', 13, 0, 6.00),
(295, '2001-02-19', 1, 3, 2.00),
(296, '2001-02-19', 17, 5, 2.00),
(297, '2001-02-19', 11, 4, 3.00),
(298, '2001-02-20', 10, 4, 10.00),
(299, '2001-02-20', 2, 2, 25.00),
(300, '2001-02-20', 3, 3, 12.00),
(301, '2001-02-20', 4, 5, 10.00),
(302, '2001-02-20', 8, 3, 9.00),
(303, '2001-02-20', 7, 3, 6.50),
(304, '2001-02-20', 5, 5, 6.50),
(305, '2001-02-20', 6, 6, 7.50),
(306, '2001-02-20', 9, 0, 30.00),
(307, '2001-02-20', 14, 3, 12.00),
(308, '2001-02-20', 12, 1, 30.00),
(309, '2001-02-20', 13, 3, 6.00),
(310, '2001-02-20', 1, 6, 2.00),
(311, '2001-02-20', 17, 4, 2.00),
(312, '2001-02-20', 11, 8, 3.00),
(313, '2001-02-21', 10, 1, 10.00),
(314, '2001-02-21', 2, 1, 25.00),
(315, '2001-02-21', 3, 3, 12.00),
(316, '2001-02-21', 4, 3, 10.00),
(317, '2001-02-21', 8, 2, 9.00),
(318, '2001-02-21', 7, 3, 6.50),
(319, '2001-02-21', 5, 2, 6.50),
(320, '2001-02-21', 6, 0, 7.50),
(321, '2001-02-21', 9, 0, 30.00),
(322, '2001-02-21', 14, 2, 12.00),
(323, '2001-02-21', 12, 0, 30.00),
(324, '2001-02-21', 13, 0, 6.00),
(325, '2001-02-21', 1, 2, 2.00),
(326, '2001-02-21', 17, 3, 2.00),
(327, '2001-02-21', 11, 2, 3.00),
(328, '2001-02-22', 10, 2, 10.00),
(329, '2001-02-22', 2, 2, 25.00),
(330, '2001-02-22', 3, 3, 12.00),
(331, '2001-02-22', 4, 0, 10.00),
(332, '2001-02-22', 8, 1, 9.00),
(333, '2001-02-22', 7, 2, 6.50),
(334, '2001-02-22', 5, 0, 6.50),
(335, '2001-02-22', 6, 0, 7.50),
(336, '2001-02-22', 9, 0, 30.00),
(337, '2001-02-22', 14, 0, 12.00),
(338, '2001-02-22', 12, 0, 30.00),
(339, '2001-02-22', 13, 1, 6.00),
(340, '2001-02-22', 1, 0, 2.00),
(341, '2001-02-22', 17, 1, 2.00),
(342, '2001-02-22', 11, 3, 3.00),
(343, '2001-02-23', 10, 8, 10.00),
(344, '2001-02-23', 2, 6, 25.00),
(345, '2001-02-23', 3, 2, 12.00),
(346, '2001-02-23', 4, 2, 10.00),
(347, '2001-02-23', 8, 1, 9.00),
(348, '2001-02-23', 7, 1, 6.50),
(349, '2001-02-23', 5, 3, 6.50),
(350, '2001-02-23', 6, 0, 7.50),
(351, '2001-02-23', 9, 2, 30.00),
(352, '2001-02-23', 14, 1, 12.00),
(353, '2001-02-23', 12, 0, 30.00),
(354, '2001-02-23', 13, 0, 6.00),
(355, '2001-02-23', 1, 2, 2.00),
(356, '2001-02-23', 17, 1, 2.00),
(357, '2001-02-23', 11, 3, 3.00),
(358, '2001-02-24', 10, 4, 10.00),
(359, '2001-02-24', 2, 2, 25.00),
(360, '2001-02-24', 3, 6, 12.00),
(361, '2001-02-24', 4, 1, 10.00),
(362, '2001-02-24', 8, 2, 9.00),
(363, '2001-02-24', 7, 1, 6.50),
(364, '2001-02-24', 5, 2, 6.50),
(365, '2001-02-24', 6, 1, 7.50),
(366, '2001-02-24', 9, 1, 30.00),
(367, '2001-02-24', 14, 2, 12.00),
(368, '2001-02-24', 12, 0, 30.00),
(369, '2001-02-24', 13, 1, 6.00),
(370, '2001-02-24', 1, 5, 2.00),
(371, '2001-02-24', 17, 3, 2.00),
(372, '2001-02-24', 11, 7, 2.00),
(373, '2001-02-25', 10, 8, 10.00),
(374, '2001-02-25', 2, 6, 25.00),
(375, '2001-02-25', 3, 7, 12.00),
(376, '2001-02-25', 4, 5, 10.00),
(377, '2001-02-25', 8, 4, 9.00),
(378, '2001-02-25', 7, 6, 6.50),
(379, '2001-02-25', 5, 8, 6.50),
(380, '2001-02-25', 6, 5, 7.50),
(381, '2001-02-25', 9, 3, 30.00),
(382, '2001-02-25', 14, 7, 12.00),
(383, '2001-02-25', 12, 1, 30.00),
(384, '2001-02-25', 13, 4, 6.00),
(385, '2001-02-25', 1, 2, 2.00),
(386, '2001-02-25', 17, 8, 2.00),
(387, '2001-02-25', 11, 5, 2.00),
(388, '2001-02-26', 10, 8, 10.00),
(389, '2001-02-26', 2, 8, 25.00),
(390, '2001-02-26', 3, 5, 12.00),
(391, '2001-02-26', 4, 3, 10.00),
(392, '2001-02-26', 8, 7, 9.00),
(393, '2001-02-26', 7, 3, 6.50),
(394, '2001-02-26', 5, 7, 6.50),
(395, '2001-02-26', 6, 4, 7.50),
(396, '2001-02-26', 9, 3, 30.00),
(397, '2001-02-26', 14, 8, 12.00),
(398, '2001-02-26', 12, 0, 30.00),
(399, '2001-02-26', 13, 3, 6.00),
(400, '2001-02-26', 1, 2, 2.00),
(401, '2001-02-26', 17, 3, 2.00),
(402, '2001-02-26', 11, 1, 3.00),
(403, '2001-02-27', 10, 8, 10.00),
(404, '2001-02-27', 2, 5, 25.00),
(405, '2001-02-27', 3, 3, 12.00),
(406, '2001-02-27', 4, 12, 10.00),
(407, '2001-02-27', 8, 9, 9.00),
(408, '2001-02-27', 7, 6, 6.50),
(409, '2001-02-27', 5, 18, 6.50),
(410, '2001-02-27', 6, 3, 7.50),
(411, '2001-02-27', 9, 4, 30.00),
(412, '2001-02-27', 14, 12, 12.00),
(413, '2001-02-27', 12, 5, 30.00),
(414, '2001-02-27', 13, 3, 6.00),
(415, '2001-02-27', 1, 1, 2.00),
(416, '2001-02-27', 17, 3, 2.00),
(417, '2001-02-27', 11, 1, 3.00),
(418, '2001-02-28', 10, 3, 10.00),
(419, '2001-02-28', 2, 2, 25.00),
(420, '2001-02-28', 3, 4, 12.00),
(421, '2001-02-28', 4, 5, 10.00),
(422, '2001-02-28', 8, 6, 9.00),
(423, '2001-02-28', 7, 3, 6.50),
(424, '2001-02-28', 5, 4, 6.50),
(425, '2001-02-28', 6, 6, 7.50),
(426, '2001-02-28', 9, 2, 30.00),
(427, '2001-02-28', 14, 9, 12.00),
(428, '2001-02-28', 12, 4, 30.00),
(429, '2001-02-28', 13, 7, 6.00),
(430, '2001-02-28', 1, 6, 2.00),
(431, '2001-02-28', 17, 8, 2.00),
(432, '2001-02-28', 11, 8, 3.00),
(433, '2001-03-01', 10, 4, 10.00),
(434, '2001-03-01', 2, 3, 25.00),
(435, '2001-03-01', 3, 3, 12.00),
(436, '2001-03-01', 4, 5, 10.00),
(437, '2001-03-01', 8, 4, 9.00),
(438, '2001-03-01', 7, 2, 6.50),
(439, '2001-03-01', 5, 3, 6.50),
(440, '2001-03-01', 6, 0, 7.50),
(441, '2001-03-01', 9, 1, 30.00),
(442, '2001-03-01', 14, 4, 12.00),
(443, '2001-03-01', 12, 3, 30.00),
(444, '2001-03-01', 13, 6, 6.00),
(445, '2001-03-01', 1, 4, 2.00),
(446, '2001-03-01', 17, 5, 2.00),
(447, '2001-03-01', 11, 12, 3.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `locked` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `Email`, `password`, `admin`, `locked`) VALUES
(1, 'test', 'test', 'test', 1, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
