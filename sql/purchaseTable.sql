CREATE TABLE IF NOT EXISTS `purchases` (`id` int(11) NOT NULL AUTO_INCREMENT,`date` varchar(30) NOT NULL,`quantity` int(11) NOT NULL,`cost` decimal(10,2) NOT NULL,`product_id` int(11) DEFAULT NULL,PRIMARY KEY (`id`),KEY `product_id` (`product_id`)) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;